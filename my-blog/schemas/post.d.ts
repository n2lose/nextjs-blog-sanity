// Inside typings.d.ts

export interface PostModel{
    _id: string;
    _createdAt: string;
    title: string;
    author:{
        name:string;
        image: string;
    },
    description: string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    slug:{
        current: string;
    };
    body: [TypedObject];
    categories: string[];
 }
 