import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  shareReplay,
  tap,
  switchMap,
  catchError,
} from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Artist,
  ArtistInput,
  ArtistProfile,
  ArtistUpdate,
} from '../models/Artist';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private readonly apiUrl = environment.apiUrl;

  private _refetch$ = new BehaviorSubject<void>(undefined);
  private _artists$ = new BehaviorSubject<Artist[]>([]);
  private _artistsStatic$: Observable<Artist[]>;

  constructor(private http: HttpClient) {
    this._artistsStatic$ = this.http
      .get<Artist[]>(`${this.apiUrl}/artists`)
      .pipe(
        shareReplay(1),
        catchError((error) => {
          console.error('Error fetching static artists:', error);
          return EMPTY;
        })
      );

    this._refetch$.pipe(switchMap(() => this.fetchArtists())).subscribe({
      next: (artists) => this._artists$.next(artists),
      error: (error) => console.error('Error fetching artist data:', error),
    });
  }

  private fetchArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists`).pipe(
      catchError((error) => {
        console.error('Error fetching artists:', error);
        return EMPTY;
      })
    );
  }

  public refreshArtists(): void {
    this._refetch$.next();
  }

  public get artists$(): Observable<Artist[]> {
    return this._artists$.asObservable();
  }

  public get artistsStatic$(): Observable<Artist[]> {
    return this._artistsStatic$;
  }

  public getArtistById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${this.apiUrl}/artists/${id}`).pipe(
      catchError((error) => {
        console.error(`Error fetching artist by ID (${id}):`, error);
        return EMPTY;
      })
    );
  }

  public getArtistProfile(id: number): Observable<ArtistProfile> {
    return this.http
      .get<ArtistProfile>(`${this.apiUrl}/artists/${id}/full`)
      .pipe(
        catchError((error) => {
          console.error(`Error fetching artist profile by ID (${id}):`, error);
          return EMPTY;
        })
      );
  }

  public createArtist(artist: ArtistInput): Observable<Artist> {
    return this.http.post<Artist>(`${this.apiUrl}/artists`, artist).pipe(
      tap(() => this.refreshArtists()), // Refresh table after a successful creation
      catchError((error) => {
        console.error('Error creating artist:', error);
        return EMPTY;
      })
    );
  }

  public updateArtist(artist: ArtistUpdate): Observable<Artist> {
    return this.http
      .patch<Artist>(`${this.apiUrl}/artists/${artist.id}`, artist)
      .pipe(
        tap(() => this.refreshArtists()), // Refresh table after a successful update
        catchError((error) => {
          console.error(`Error updating artist (${artist.id}):`, error);
          return EMPTY;
        })
      );
  }

  public deleteArtist(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/artists/${id}`).pipe(
      tap(() => this.refreshArtists()), // Refresh table after a successful deletion
      catchError((error) => {
        console.error(`Error deleting artist (${id}):`, error);
        return EMPTY;
      })
    );
  }
}
