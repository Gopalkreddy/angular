import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [JsonPipe],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceApi {

  http = inject(HttpClient);
  userdata = resource({
    loader: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())   
  })

  userList = rxResource({
    stream: () => this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  });

}
