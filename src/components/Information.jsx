import Pythonimg from '../Image/python.png';
import JSXimg from '../Image/jsx.png';
import CSSimg from '../Image/css.png';
import MLimg from '../Image/ML.png';
import KU from '../Image/KU.png';
import AC from '../Image/AC.jpg';
let info = {
    aboutmeTitle: 'About Me',
    Aboutme: [   
        { 
            myname: 'Jakkaphob Kongthanarith',
            tel: '0836265399',
            mail: 'jkpbeam@gmail.com',
            github: 'Jakkaphobkongthanarith'
        }
    ],
    Education: [
        {
            UniversityName:'Kasetsart University',
            Specialization:'Electrical Engineering',
            Year:'2019 - 2023',
            img: KU
        },
        {
            UniversityName:'Assumption College',
            Specialization:'Science and Math',
            Year:'2012 - 2018',
            img: AC
        }
    ],
    abilityTitle: 'Ability',
    ability: [
        {
            ab: 'Hard worker'
        },
        {
            ab: 'Not afraid to ask a question'
        },
        {
            ab: 'Decent English Communication skill'
        },
        {
            ab: 'Open mind'
        },
        {
            ab: 'Proficient at working as a team'
        },
        {
            ab: 'Be able to handle stress'
        }],
    codingsTitle: 'Coding',
    codings: [
        {
            codingname: 'Python',
            imgurl: Pythonimg
        },
        {
            codingname: 'ReactJSX',
            imgurl: JSXimg
        },
        {
            codingname: 'CSS',
            imgurl: CSSimg
        },
        {
            codingname: 'Machine Learning',
            imgurl: MLimg
        }
    ]    
  };
export default info;
