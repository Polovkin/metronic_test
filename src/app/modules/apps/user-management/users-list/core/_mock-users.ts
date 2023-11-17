import {User} from "./_models";

export interface MockUser extends User {
    link: string;
    source: string;
}

const _mockUsers: MockUser[] = [
    {
        "id": 1,
        "name": "Emma Smith",
        "avatar": "avatars/300-6.jpg",
        "email": "smith@kpmg.com",
        "position": "Art Director",
        "role": "Administrator",
        "last_login": "Yesterday",
        "two_steps": false,
        "joined_day": "10 Nov 2022, 9:23 pm",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 2,
        "name": "Melody Macy",
        "initials": {
            "label": "M",
            "state": "danger"
        },
        "email": "melody@altbox.com",
        "position": "Marketing Analytic",
        "role": "Analyst",
        "last_login": "20 mins ago",
        "two_steps": true,
        "joined_day": "10 Nov 2022, 8:43 pm",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 3,
        "name": "Max Smith",
        "avatar": "avatars/300-1.jpg",
        "email": "max@kt.com",
        "position": "Software Enginer",
        "role": "Developer",
        "last_login": "3 days ago",
        "two_steps": false,
        "joined_day": "22 Sep 2022, 8:43 pm",
        "online": false,
        "link": "https://www.google.com",
        "source": "Google"
    },
    {
        "id": 4,
        "name": "Sean Bean",
        "avatar": "avatars/300-5.jpg",
        "email": "sean@dellito.com",
        "position": "Web Developer",
        "role": "Support",
        "last_login": "5 hours ago",
        "two_steps": true,
        "joined_day": "21 Feb 2022, 6:43 am",
        "online": false,
        "link": "https://www.twitter.com",
        "source": "Twitter"
    },
    {
        "id": 5,
        "name": "Brian Cox",
        "avatar": "avatars/300-25.jpg",
        "email": "brian@exchange.com",
        "position": "UI/UX Designer",
        "role": "Developer",
        "last_login": "2 days ago",
        "two_steps": true,
        "joined_day": "10 Mar 2022, 9:23 pm",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 6,
        "name": "Mikaela Collins",
        "initials": {
            "label": "M",
            "state": "warning"
        },
        "email": "mik@pex.com",
        "position": "Head Of Marketing",
        "role": "Administrator",
        "last_login": "5 days ago",
        "two_steps": false,
        "joined_day": "20 Dec 2022, 10:10 pm",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 7,
        "name": "Francis Mitcham",
        "avatar": "avatars/300-9.jpg",
        "email": "f.mit@kpmg.com",
        "position": "Software Arcitect",
        "role": "Trial",
        "last_login": "3 weeks ago",
        "two_steps": false,
        "joined_day": "10 Nov 2022, 6:43 am",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 8,
        "name": "Olivia Wild",
        "initials": {
            "label": "O",
            "state": "danger"
        },
        "email": "olivia@corpmail.com",
        "position": "System Admin",
        "role": "Administrator",
        "last_login": "Yesterday",
        "two_steps": false,
        "joined_day": "19 Aug 2022, 11:05 am",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 9,
        "name": "Neil Owen",
        "initials": {
            "label": "N",
            "state": "primary"
        },
        "email": "owen.neil@gmail.com",
        "position": "Account Manager",
        "role": "Analyst",
        "last_login": "20 mins ago",
        "two_steps": true,
        "joined_day": "25 Oct 2022, 10:30 am",
        "online": false,
        "link": "https://www.google.com", "source": "Google"
    },
    {
        "id": 10,
        "name": "Dan Wilson",
        "avatar": "avatars/300-23.jpg",
        "email": "dam@consilting.com",
        "position": "Web Desinger",
        "role": "Developer",
        "last_login": "3 days ago",
        "two_steps": false,
        "joined_day": "19 Aug 2022, 10:10 pm",
        "online": false,
        "link": "https://www.google.com", "source": "Google",

    }
]

export default _mockUsers;
