import Error from './img/Error.svg';

const NotFound = () =>{
    return(
        <div className='text-center'>
            <img src={ Error } alt="Not Found Error" className='width-50' />
        </div>
    )
}
export default NotFound;