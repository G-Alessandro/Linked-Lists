(()=>{"use strict";class t{constructor(t){this.value=t||null,this.next=null}}const e=new class{constructor(){this.head=null,this.tail=null}listArray(){const t=[];let e=this.head;for(;e;)t.push(e.value),e=e.next;return t}append(e){const i=new t(e);this.head?(this.tail.next=i,this.tail=i):(this.head=i,this.tail=i)}prepend(e){const i=new t(e);this.head?(i.next=this.head,this.head=i):(this.head=i,this.tail=i)}size(){console.log("Linked-list size:",this.listArray().length)}getFirst(){console.log("First:",this.head.value)}getLast(){console.log("Last:",this.tail.value)}at(t){void 0===this.listArray()[t]?console.log(`The index ${t} does not exist!`):console.log(`In index ${t} there is: ${this.listArray()[t]}!`)}pop(){if(this.head===this.tail)return this.head=null,this.tail=null,void console.log("Linked-list: it's empty!");let t=this.head,e=null;for(;t.next;)e=t,t=t.next;e.next=null,this.tail=e}contains(t){this.listArray().includes(t)?console.log(`True! ${t} is in the list!`):console.log(`False! ${t} is not in the list!`)}find(t){let e="null";this.listArray().forEach((i=>{i===t&&(e=this.listArray().indexOf(i))})),"null"===e?console.log("Value not found!"):console.log(`The index of the value is ${e}!`)}toString(){0===this.listArray().length?console.log("Linked-list: it's empty!"):console.log("Linked-list:",this.listArray().join(" -> "))}insertAt(e,i){if(0===i)return void this.prepend(e);const s=new t(e);let n=this.head,l=null,o=0;for(;n&&o<i;)l=n,n=n.next,o+=1;o===i?(l.next=s,s.next=n):this.append(e)}removeAt(t){if(0===t)return void(this.head=this.head.next);let e=this.head,i=null,s=0;for(;e&&s<t;)i=e,e=e.next,s+=1;s===t&&(i.next=e.next,e=null)}};e.pop(),e.toString(),e.append(10),e.append(20),e.append(30),e.append(40),e.prepend(60),e.toString(),e.pop(),e.toString(),e.size(),e.getFirst(),e.getLast(),e.at(3),e.at(5),e.contains(20),e.contains(50),e.find(30),e.find(70),e.insertAt(80,2),e.toString(),e.removeAt(2),e.toString()})();