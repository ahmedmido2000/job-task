import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsis
} from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const LeftMain = () => {
    const FinancialFilter = (event) => {
        // Get all the vinancial-btn elements
        const buttons = document.querySelectorAll('.vinancial-btn');
        
        // Loop through them and remove the 'active' class
        buttons.forEach(button => button.classList.remove('active'));
    
        // Add 'active' class to the clicked element
        event.target.classList.add('active');
      };
    const handleClick = (event) => {
        // Get all the date-filter elements
        const filterItems = document.querySelectorAll('.date-filter');
        
        // Loop through them and remove the 'active' class
        filterItems.forEach(item => item.classList.remove('active'));
    
        // Add 'active' class to the clicked element
        event.target.classList.add('active');
      };
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [5000, 12000, 8000, 13000, 7000, 9000, 15000, 14000, 16000, 11000, 17000, 19000],
            fill: false,
            borderColor: '#007bff',
            tension: 0.4, // Add a smooth curve
            borderRadius: 10, // Add border radius to the line for rounded corners
            pointRadius: 0, // Hide the points
            pointHoverRadius: 0, // Remove the hover effect on the points
          },
        ],
      };
    
      // Chart options
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
            x: {
                grid: {
                  display: false, // Hide the x-axis grid lines
                },
            },
            y: {
                grid: {
                    display: false, // Hide the x-axis grid lines
                  },
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                  if (value >= 1000) {
                    return value / 400 + 'K ر.س'; // Format numbers as 'K ر.س'
                  }
                  return value + ' ر.س'; // For smaller values, add 'ر.س'
                },
              },
          },
        },
      };
  return (
    <div>
      <div className='d-flex gap-3 mt-3'>
        <div className='card w-100 p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='text-black-50'>المستحقات</h5>
                <FontAwesomeIcon icon={faEllipsis} size="1x" />
            </div>
            <h4 className='fw-bold text-end dark-blue mt-2'>1,200.00 ر.س.</h4>
            <div className='d-flex gap-1 align-items-center mt-2'>
                <h6 className='fw-bold dark-blue m-1'>8%</h6>
                <i className="bi bi-arrow-down-right-circle text-danger"></i>
            </div>
        </div>
        <div className='card w-100 p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='text-black-50'>الأرباح</h5>
                <FontAwesomeIcon icon={faEllipsis} size="1x" />
            </div>
            <h4 className='fw-bold text-end dark-blue mt-2'>1,200.00 ر.س.</h4>
            <div className='d-flex gap-1 align-items-center mt-2'>
                <h6 className='fw-bold dark-blue m-1'>12%</h6>
                <i className="bi bi-arrow-up-right-circle text-success"></i>
            </div>
        </div>
      </div>
      <img src='card.jpg' className='mt-3 img-fluid' style={{height:"220px"}}/>
      <div className='mt-3 d-flex justify-content-between align-items-center'>
            <h4 className='fw-bold text-end dark-blue mt-2'>العمليات المالية</h4>
            <div className='d-flex align-items-center'>
                <div className='vinancial-btn py-2 px-4' onClick={FinancialFilter}>المستحقات</div>
                <div className='vinancial-btn py-2 px-4 active' onClick={FinancialFilter}>الأرباح</div>
            </div>
      </div>
      <div className="chart-container">
      <div className="chart-header">
        <div className='d-flex align-items-center gap-4 my-2'>
            <div className='date-filter fw-bold pb-2 active' onClick={handleClick}>أسبوعى</div>
            <div className='date-filter fw-bold pb-2' onClick={handleClick}>شهرى</div>
            <div className='date-filter fw-bold pb-2' onClick={handleClick}>السنة السابقة</div>
        </div>
      </div>
            <h6 className='fw-bold text-center dark-blue mt-2'>70,649 ر.س</h6>
            <div style={{height:"200px", width:"100%"}}>
                <Line data={data} options={options} />

            </div>
    </div>
    </div>
  )
}

export default LeftMain
