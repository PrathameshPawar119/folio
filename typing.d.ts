// we have to make interfaces for every document wanna fetch from sanity
// so that we can easily fetch corresponding properties of that doc

interface SanityBody {
    _createdAt : string;
    _updatedAt : string;
    _id : string;
    _rev : string;
}

interface Image {
    _type: 'image';
    asset:{
        _ref : string;
        _type : "reference"
    }
}

export interface Social extends SanityBody {
    _type : "social";
    title: string;
    url: string
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name : string;
    role : string;
    profileImage : Image;
    phoneNumber : string;
    email : string;
    address: string;
    backgroundInfo: string;
    heroImage: Image;
}

export interface Skills extends SanityBody {
    _type: 'skills';
    title : string;
    progress: number;
    heroImage: Image;
    toPresent: boolean;
}

export interface Experience extends SanityBody {
    _type : 'experience';
    jobTitle: string;
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    currentlyWorkingHere: boolean;
    technologies: Technology[];
    points: string[];
}

export interface Projects extends SanityBody{
    _type: 'projects';
    title: string;
    projectImage: string;
    summary: string;
    technologies: Technology[];
    linktoBuild: string;
}