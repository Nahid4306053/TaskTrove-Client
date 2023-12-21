
import { useAuth } from '../../Context/AuthnicationContext'
import AdditionalInfoForm from '../../components/Dashboard/MyProfile/AdditionalInfoForm'


export default function MyProfile() {
  const {CurrentUser}  = useAuth()
  const role = CurrentUser.role                
  return (
    <div className=''>
     <div className="">
      <div style={{background:"url(https://i.ibb.co/f2TD789/wp2089896.jpg)",backgroundPosition:"center"}}  className="md:h-48 h-28">
          <img className=' translate-y-1/2 h-full w-28 md:w-48 mx-auto object-cover bg-white p-1  rounded-full' src={CurrentUser.photoURL} alt="" />
        </div>
         <div className="deatils  text-center  md:mt-16 mt-8 pt-10">
           <h3 className='name text-2xl font-bold'>{CurrentUser.displayName}</h3> 
           <h4>{CurrentUser.email}</h4>         
        </div>  
         <div className="additionalInfo px-10">
             {role === 'tour guider' &&
             <AdditionalInfoForm ></AdditionalInfoForm>
             }

                   
         </div>                        
      </div>                 
    </div>
  )
}
