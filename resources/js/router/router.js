import  home from '../components/HomeContent';
import about from '../components/about';
import Joblisting from '../components/Joblisting';
import blog from '../components/blog';
import contact from '../components/contact';
import blog_details from '../components/blog_details';
import notfound from '../components/notfound';
import job_details from '../components/job_details';

export const routes =[
    {
        path:'/',
        name:'home',
        component:home

    },
    {
        path:'/about',
        name:'about',
        component: about

    } ,
    {
        path:'/contact',
        name:'contact',
        component: contact

    } ,
    {
        path:'/blog_details',
        name:'blog_details',
        component: blog_details

    } ,
    {
        path:'/Joblisting',
        name:'Joblisting',
        component: Joblisting

    },
    {
        path:'/job_details',
        name:'job_details',
        component: job_details

    },
    {
        path:'/blog',
        name:'blog',
        component: blog

    },
    {
        path:'/*',
        name:'notfound',
        component: notfound

    }
]



