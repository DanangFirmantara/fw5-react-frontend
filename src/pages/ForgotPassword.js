import React from 'react'
import { Arrow } from '../components/Arrow'
import Footer from '../components/Footer'

export const ForgotPassword = () => {
	return (
		<React.Fragment>
			<header>
				<div className="img-banner-4 img-forgot">
					<div className="img-banner-4 cover-dark">
						<div className="container py-7 px-4 px-md-0">
							<div>
								<Arrow variant='text-white' className='mb-4'>
                           Back
								</Arrow>
								<div className='fs-0-0 pd-heading text-center mb-5 d-none d-md-block'>Don&lsquo;t  worry, we got your back!</div>
								<div className='fs-0 pd-heading text-center mb-5 d-md-none'>Don&lsquo;t  worry, we got your back!</div>
								<form>
									<div className='row mb-4'>
										<div className='col-lg-6 mx-lg-auto col'>
											<input className='button-light py-3 fs-4 text-center w-100' placeholder='Enter your email address'/>
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-lg-6 mx-lg-auto col'>
											<button className='button-third w-50 py-3 fs-4 fw-bolder w-100'>Send Link</button>
										</div>
									</div>
									<div className='text-center'>
										<p className='fs-4'>
                              You will receive a link to reset your password. <br/> If you haven’t received any link, click<span className='fw-bold'> Resend Link</span> 
										</p>
									</div>
								</form>
							</div>
							
						</div>
					</div>
				</div>
			</header>
			<Footer/>
		</React.Fragment>
		
	)
}

export default ForgotPassword
