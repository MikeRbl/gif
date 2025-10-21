import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GiphyResponse } from '../interface/gify';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private http: HttpClient = inject(HttpClient);
  private apiKey: string = 'jLfKPddUduKHr7VI2Gj3EYQ5bkLqnrrN';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private _gifList = signal<Gif[]>([]);
  public gifList = computed(() => this._gifList());

  private _tagsHistory = signal<string[]>([]);
  public tagsHistory = computed(() => this._tagsHistory());

  public isLoading = signal<boolean>(false);

  constructor() {
    this.loadHistory();
    effect(() => {
      this.saveHistory();
    });
  }

  private loadHistory(): void {
    const history = localStorage.getItem('tagsHistory');
    if (history) {
      this._tagsHistory.set(JSON.parse(history));
    }

    if (this.tagsHistory().length > 0) {
       this.searchTag(this.tagsHistory()[0]);
    } else {
       this.loadTrendingGifs();
    }
  }

  private saveHistory(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this.tagsHistory()));
  }

  public loadTrendingGifs(): void {
    this.isLoading.set(true);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12');

    this.http.get<GiphyResponse>(`${this.serviceUrl}/trending`, { params })
      .subscribe({
        next: (resp) => {
          this._gifList.set(resp.data);
        },
        error: (err) => {
          console.error('Error fetching trending GIFs:', err);
          this._gifList.set([]);
        },
        complete: () => {
          this.isLoading.set(false);
        }
      });
  }

  private organizeHistory(tag: string): void {
    const normalizedTag = tag.toLowerCase().trim();
    if (normalizedTag.length === 0) return;

    this._tagsHistory.update(currentHistory => {
      const updatedHistory = currentHistory.filter(oldTag => oldTag.toLowerCase() !== normalizedTag);
      updatedHistory.unshift(normalizedTag);
      return updatedHistory.slice(0, 10);
    });
  }

  public searchTag(tag: string): void {
    const normalizedTag = tag.toLowerCase().trim();
    if (normalizedTag.length === 0) return;

    this.organizeHistory(normalizedTag);
    this.isLoading.set(true);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', normalizedTag);

    this.http.get<GiphyResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe({
        next: (resp) => {
          this._gifList.set(resp.data);
        },
        error: (err) => {
          console.error('Error fetching GIFs:', err);
          this._gifList.set([]);
        },
        complete: () => {
          this.isLoading.set(false);
        }
      });
  }
}
