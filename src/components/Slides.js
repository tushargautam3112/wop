import {useEffect} from 'react'
import useLocoScroll from '../hooks/useLocoScroll'
import LocomotiveScroll from 'locomotive-scroll'

const Slides = () => {
  useLocoScroll()
  return (
    <div id='slidesContainer'>
      <div id='slides'>
        <div className='slide' id='slide1'>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>         
          <img src='https://images.unsplash.com/photo-1485565036208-bcf966c955a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
        </div>
        <div className='slide' id='slide2'>
        <img src='https://images.unsplash.com/photo-1476673160081-cf065607f449?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://images.unsplash.com/photo-1706549717451-759b9a588511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>         
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
        </div>
        <div className='slide' id='slide3'>
        <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://images.unsplash.com/uploads/14122621859313b34d52b/37e28531?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>         
          <img src='https://images.unsplash.com/photo-1706549717451-759b9a588511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
        </div>
        <div className='slide' id='slide4'>
        <img src='https://images.unsplash.com/uploads/14122621859313b34d52b/37e28531?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://images.unsplash.com/uploads/14122621859313b34d52b/37e28531?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>         
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
          <img src='https://plus.unsplash.com/premium_photo-1701095037865-f8c67d57f9a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slideImg'/>
        </div>
      </div>
    </div>
  )
}

export default Slides