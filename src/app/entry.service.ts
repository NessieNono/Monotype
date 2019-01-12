import { Injectable } from '@angular/core';
// Httpclient 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

	uri = 'http://localhost:4000/entry'; // should i change this number??
	// i think it should be different from the angular defaults 
	// We define our backend API url, but not the backend 
	// THIS URL IS FOR THE NODE JS SERVER

	constructor(private http: HttpClient) { }



	// service will send the HTTP Post request to the Node.js server.
	addEntry(entry_title, entry_body) {
	const obj = {
		entry_title: entry_title, 
		entry_body: entry_body
	};
	console.log("this is entry.service.ts: ", obj);
	console.log("entry title: ", obj.entry_title); 
	console.log("entry body: ", obj.entry_body); 
	this.http.post(`${this.uri}/add`, obj)
	    .subscribe(res => console.log('Done'));
	}
}
