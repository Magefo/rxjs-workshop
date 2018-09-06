import { Component } from '@angular/core';

@Component({
  selector: 'app-demo0',
  templateUrl: './demo0.component.html',
})
export class Demo0Component {
  person = {
    name: 'Bram Borggreve',
    avatar: 'https://avatars3.githubusercontent.com/u/36491',
    facts: [
      '🇳🇱 Born in the Netherlands',
      '🛫 Living abroad since 2015',
      '🤓 Freelance software engineer',
      '👨‍🏫 Instructor at @eggheadio',
      '👨‍💻 Author at @PacktPub',
    ]
  };
  personLeonardo = {
    name: 'Leonardo Perez',
    avatar: 'https://avatars3.githubusercontent.com/u/19419023',
    facts: []
  };
  personCarlos = {
    name: 'Carlos Lopez',
    avatar: 'https://pbs.twimg.com/profile_images/998226111292104708/t23KUw9h_400x400.jpg',
    facts: []
  };

}
