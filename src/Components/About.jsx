import React from 'react';
import Card from './Card';

const About = () => {
  const data = [
    {
      id: 1,
      name: 'Star Fish',
      src: 'src/assets/image6.jpg'
    },
    {
      id: 2,
      name: 'Turtle',
      src: 'src/assets/image2.jpg'
    },
    {
      id: 3,
      name: 'Octobus',
      src: 'src/assets/image3.jpg'
    },
    {
      id: 4,
      name: 'Clown Fish',
      src: 'src/assets/image4.jpg'
    },
    // {
    //   id: 5,
    //   name: 'Golden Fish',
    //   src: 'src/assets/image5.jpg'
    // },
    // {
    //   id: 6,
    //   name: 'Fish',
    //   src: 'src/assets/image4.jpg'
    // },
  ];

  return (
    <div className='aboutContainer'>
      <div className='aboutContainer--flex'>
        <p className='aboutContainer--bigtext'>UnderWater.</p>
        <div className='aboutContainer--line' />
      </div>
      <p className='aboutContainer--content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero vel perferendis rerum fugiat dolore beatae mollitia velit. Quas quos soluta sit, voluptatem maiores cumque esse. Recusandae alias corrupti aperiam voluptas?</p>
      <div className='cardContainer'>

        {data.map((item, index) =>

          <Card name={item.name} path={item.src} key={index} />

        )}
      </div>
    </div>
  );
}

export default About;
