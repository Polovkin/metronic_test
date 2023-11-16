
import {useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import AuthStesSelector from "./components/AuthStesSelector.tsx";
import AuthStepOne from "./components/AuthStepOne.tsx";
import AuthStepTwo from "./components/AuthStepTwo.tsx";


const AuthLayout = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = (index: number) => {
    setCurrentStep(index)
  }

  const renderStep = () => {
    switch (currentStep) {
        case 0:
            return <AuthStepOne setCurrentStep={handleNextStep}/>
        case 1:
            return <AuthStepTwo/>
        default:
            return <div>error</div>
    }
  }

  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      {/* begin::Body */}
      <div className='d-flex w-75 flex-column flex-lg-row-fluid p-10 order-1 order-lg-2'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            {renderStep()}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}


      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className='d-flex flex-lg-row-fluid w-lg-50 w-25 bgi-size-cover bgi-position-center order-2 order-lg-1'
        style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/auth-bg.png')})`}}
      >
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          <div className={'mt-auto d-flex flex-column'}>
            {/* begin::Logo */}
            <Link to='/' className='mb-12 mx-auto'>
              <img alt='Logo' src={toAbsoluteUrl('/media/logos/custom-1.png')} className='h-75px' />
            </Link>
            {/* end::Logo */}
            <AuthStesSelector activeStep={currentStep}  />
          </div>


          {/* begin::Image */}

          {/* begin::Footer */}
          <div className='d-flex mt-auto flex-center flex-wrap'>
            {/* begin::Links */}
            <div className='d-flex fw-semibold fs-base'>
              <a href='#' className='px-5 text-success' target='_blank'>
                Terms
              </a>

              <a href='#' className='px-5 text-success' target='_blank'>
                Plans
              </a>

              <a href='#' className='px-5 text-success' target='_blank'>
                Contact Us
              </a>
            </div>
            {/* end::Links */}
          </div>
          {/* end::Footer */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}
