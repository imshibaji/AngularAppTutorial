import { StreamState } from './../../interfaces/stream-state';
import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {
  isVolume = false;

  title: string = 'No Song';
  artist: string = 'Unknown';
  len: number = 100;
  val: number;

  @Input('playlist') files: Array<any> = [
    {
      name: 'Song 1',
      artist: 'unknown',
      url: './assets/song1.mp3'
    },
    {
      name: 'Song 2',
      artist: 'unknown',
      url: './assets/song2.mp3'
    },
    {
      name: 'Song 3',
      artist: 'unknown',
      url: './assets/song3.mp3'
    }
  ];
  state: StreamState;
  currentFile: any = {};

  constructor(public audioService: AudioService){
      // get media files
      // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit(): void {
    this.val = 0.5;
    // this.play();
  }

  onVolume(){
    this.isVolume = !this.isVolume;
    if(!this.isVolume){
      this.val = 1;
      this.onVolumeChange(1);
    }else{
      this.val= 0;
      this.onVolumeChange(0);
    }
  }

  volumeChange(ev){
    // console.log(ev);
    if(ev.value == 0){
      this.isVolume = true;
    }else{
      this.isVolume = false;
    }
    this.onVolumeChange(ev.value);
  }

  change(ev){
    // console.log(ev);
    this.onSliderChangeEnd(ev.target.value);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change);
  }

  onVolumeChange(volume){
    this.audioService.setVolume(volume);
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe( (events: any) => {
      if(events.type == 'ended'){
        if(!this.isLastPlaying()){
          this.next();
        }else{
          this.openFile(this.files[0], 0);
        }
      }
    });
  }

  openFile(file, index) {
    try {
      this.currentFile = { index, file };
      this.audioService.stop();
      this.title = file.name || 'no song';
      this.artist = file.artist || 'no song';
      this.playStream(file.url);
    } catch (error) {
      
    }
    
  }

  pause() {
    this.audioService.pause();
  }

  play() {        
    this.openFile(this.files[0], 0);
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
}
