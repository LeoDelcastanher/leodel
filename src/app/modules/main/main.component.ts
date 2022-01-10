import {Component, OnInit} from '@angular/core';
import {ExperienceBox} from "../../../Interfaces/experience.box.interface";
import {MainComponentService} from "../../services/main.component.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myAcademic = {
    academicHistory: [] as Array<ExperienceBox>,
    loading: true,
  };

  workHistory: Array<ExperienceBox> = [
    {
      name: 'CI&T',
      imageSrc: '/assets/images/CIandT_logo.png',
      imageAlt: 'CI&T - Logo',
      startDate: new Date('01/01/2020'),
      expTitle: 'Front-End Developer',
      description: '(CI&T bought Dextra just last year) Here I maintain an online marketplace seller software. All in Angular (TypeScript) with its own design system.',
    },
    {
      name: 'HarboR Informática Industrial',
      imageSrc: '/assets/images/HarboR_logo.png',
      imageAlt: 'HarboR Informática Industrial - Logo',
      startDate: new Date('01/01/2016'),
      endDate: new Date('01/01/2020'),
      expTitle: 'Front-End Developer and Designer',
      description: 'Here is where I learned more about Front-End, RESTful services, API and fell in love with them instantly. I created from the ground up a fully responsive web app with real time data analysis. Created a unique look and feel, the whole design of the software. It was all in javascript, using AngularJs with lots of different libraries (charts, data manipulation and some visual enhancers). Since the goal was to show a huge amount of data in a small space (specially with the size of the phone screens back then) I created and implemented all sorts of smart, unique, compact and practical ways of presenting them.',
    },
    {
      name: 'Primesoft',
      imageSrc: '/assets/images/primesoft_logo.png',
      imageAlt: 'Primesoft - Logo',
      startDate: new Date('01/01/2013'),
      endDate: new Date('01/01/2016'),
      expTitle: 'Web Developer',
      description: 'I started out developing custom websites for clients, most from scratch but some using Wordpress. Later on it came to my responsibility to maintain an online test taking web app, where I used Javascript, Jquery and PHP to create a pleasant test taking experience. Always trying to help as much as I can, I started creating the digital banners and flyers for the company, using Adobe photoshop and illustrator.',
    },
    {
      name: 'Outplan',
      imageSrc: '/assets/images/Outplan_logo.png',
      imageAlt: 'Outplan - Logo',
      startDate: new Date('01/01/2013'),
      endDate: new Date('01/01/2013'),
      expTitle: 'Quality Assurance',
      description: 'While having to understand the inner workings of their software so I could test them, I also created complex SQL queries to create charts and data sheets.',
    },
    {
      name: 'CIDASC',
      imageSrc: '/assets/images/CIDASC_Logo.jpg',
      imageAlt: 'CIDASC - Logo',
      startDate: new Date('01/01/2012'),
      endDate: new Date('01/01/2012'),
      expTitle: 'Tech Support',
      description: 'Here is where I worked for a service company called Bonatec, that provided tech support for CIDASC. From fixing printers to solving tech crysis through the phone with a farmer all across the state (of Santa Catarina), I did it all.',
    },
    {
      name: 'CDI (Now CPDI)',
      imageSrc: '/assets/images/CPDI-CDI_logo.png',
      imageAlt: 'CPDI - Logo',
      startDate: new Date('01/01/2009'),
      endDate: new Date('01/01/2010'),
      expTitle: 'Tech Support',
      description: 'This was one of my first jobs in the tech industry. It was a voluntary work, where we would receive donations of old computers from big companies and get them running again, achieving the minimum standards for Windows xp. These computers then got placed in various CDI stations across Brazil, where underprivileged kids and adults could have access to them and the internet.',
    },
  ];

  constructor(private mainService: MainComponentService) {
  }

  ngOnInit(): void {
    this.mainService.getAcademicExperienceList().then(
      (response) => {
        this.myAcademic.academicHistory = response as Array<ExperienceBox>;
      },
      error => {
        //@TODO
        // }
      }
    );
  }

}
