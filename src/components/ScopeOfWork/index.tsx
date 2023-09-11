import React from 'react'
import ChairImage from '../../assets/chair.png';
import JoinerImage from '../../assets/joiner.png';
import './style.css';

const ScopeOfWork: React.FC = () => {
  return (
    <div className='p-8 flex flex-col gap-5 items-center' id='scope-of-work'>
        <p className='text-styled'>Scope Of Work</p>
        <div className='flex wrap justify-center gap-5 scope-container relative'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                    return (
                        <div className='scope flex flex-col gap-1 justify-center mt-4 ml-8'>
                            <div className='flex flex-col gap-1 element-container justify-center'>
                                <div className='flex flex-col gap-1 '>
                                    <div className='in-e-c flex justify-center items-center'>
                                        <img className='element-img' src={ChairImage}/>
                                    </div>
                                </div>
                            </div>
                            <p className=''>Consultation</p>
                            <p>Consultation and proper documentation to assess client’s needs and
what we can offer.</p>
                        </div>
                    )
                })
            }
            <div className='connector absolute'>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
                <img src={JoinerImage}/>
            </div>
        </div>
        
    </div>
  )
}

export default ScopeOfWork;


// import React from 'react';
// import './style.css'; // Import your CSS file

// function CustomTable() {
//   const rows = 10;
//   const columns = 6;

//   return (
//     <table className="custom-table">
//       <tbody>
//         {Array.from({ length: rows }, (_, rowIndex) => (
//           <tr key={rowIndex}>
//             {
//                 Array.from({ length: (columns / ((rowIndex % 3 === 0) ? 1 : 2)) }, (_, colIndex) => (
//                 <td
//                     key={colIndex}
//                     className={`column-${(rowIndex % 3 === 0) ? 1 : 2}`}
//                     colSpan={(rowIndex % 3 === 0) ? 1 : 2}
//                 >
//                     Row {rowIndex + 1}, Column {colIndex + 1}
//                 </td>
//                 ))
//             }
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default CustomTable;
