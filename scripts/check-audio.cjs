const fs=require('fs');
for(const name of ['new-song','new-answer','new-word','new-finish']){const w=fs.readFileSync('audio/'+name+'.wav');let peak=0;for(let i=44;i<w.length;i+=2)peak=Math.max(peak,Math.abs(w.readInt16LE(i)));if(peak<300||peak>8000)throw Error(name+': invalid signal peak '+peak);console.log(name+': peak '+peak);}
