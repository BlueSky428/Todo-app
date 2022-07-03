import React from 'react'

const Category = (props) => {

    const underlineStyle = 'before:block before:rounded-tl-md before:rounded-tr-md before:absolute before:w-[90px] before:h-1 before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:bg-[#2F80ED]';

  return (
    <div className='border-b border-[#BDBDBD] font-montserrat text-sm font-semibold leading-4'>
        <nav>
            <ul className='grid grid-cols-3'>
                <li className='m-0 px-8 py-4 text-center relative'>
                    <a 
                        href="#all" 
                        id='all' 
                        onClick={props.handleCategory}
                        className={props.activeCategory === 'all' ? underlineStyle : ''}>
                        All
                    </a>
                </li>
                <li className='m-0 px-8 py-4 text-center relative'>
                    <a 
                        href="#active" 
                        id='active' 
                        onClick={props.handleCategory}
                        className={props.activeCategory === 'active' ? underlineStyle : ''}>
                        Active
                    </a>
                </li>
                <li className='m-0 px-8 py-4 text-center relative'>
                    <a 
                        href="#completed" 
                        id='completed' 
                        onClick={props.handleCategory}
                        className={props.activeCategory === 'completed' ? underlineStyle : ''}>
                        Completed
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Category