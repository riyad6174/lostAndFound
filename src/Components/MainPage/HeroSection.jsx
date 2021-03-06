import React from 'react'
import lostImage from './images/lost.jpg'
import foundImage from './images/kitten.jpg'
import postImage from './images/happy.jpg'

const HeroSectio = () => {
  return (
    <>
    <main className="py-16 container mx-auto px-6 md:px-0">
    <section>
      <h1 className="text-3xl font-bold text-gray-600 mb-10">How This Website Can Help You?</h1>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2">
        <div>
          <div className="bg-gray-300 h-44 overflow-hidden" >
            <img src={lostImage} alt="lostImage" />
          </div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">Reach More People. <span className="text-gray-700">Its Better than a Poster</span></h3>
        </div>
        <div>
          <div className="bg-gray-300 h-44 overflow-hidden" >
          <img src={foundImage} alt="foundImage" />
          </div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">Found Something ? <span className="text-gray-700"> Want To Give It Back?</span></h3>
        </div>
        <div>
          <div className="bg-gray-300 h-44 overflow-hidden">
          <img src={postImage} alt="postImage" />
          </div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">Be More Happy To  <span className="text-gray-700">Get Back Your Belongins</span></h3>
        </div>
      </div>
      <hr className="w-40 my-14 border-4 rounded-md sm:mx-0 mx-auto" />
    </section>
    <section>
      <h1 className="inline-block text-gray-600 font-bold text-3xl">
       How To Use This  Website ?
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-10">
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">1. Register An Account</h3>
          <p className="text text-gray-400">Don't know how to deal with lost or found items near you? Register with your name and email address. If you have registered already, you can use the same account for posting unlimited ads.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">2. Verify Your Account</h3>
          <p className="text text-gray-400">Confirm your registration through the verification link which has sent to the given email address and then you can manage the account details now. Use either username or email address for login to your account.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mt-2">3. Start Reporting</h3>
          <p className="text text-gray-400">You can start creating the Ad for the lost or found items now to claim the item or hand over it to the rightful owner. Once done, we will post the ad on the large community where everybody can potentially take action in searching for what you have lost.</p>
        </div>
      </div>
    </section>
    <div className="mt-14">
      <p className='text-gray-600'>Heroes are those who never take anything for granted even after getting a chance and remains honest in their lives!</p>
    </div>
  </main>
    
    </>
  )
}

export default HeroSectio

//reference https://tailwindcomponents.com/component/page-layout-responsive