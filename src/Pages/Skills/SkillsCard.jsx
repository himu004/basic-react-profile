import bg from '../../assets/react.svg'

const SkillsCard = ({skill}) => {

    const {img, name} = skill || {};

    return (
        <div className='bg-white  hover:bg-green-200 hover:shadow-2xl p-10 flex justify-center items-center'>
            <div className='space-y-3'>
            <img src={bg} alt="" />
            <p className='text-center'>{name}</p>
            </div>
        </div>
    );
};

export default SkillsCard;