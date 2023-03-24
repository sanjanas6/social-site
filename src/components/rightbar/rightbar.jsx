import React from 'react'
import "./rightbar.scss";

export default function rightbar() {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestion For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />
              <span>Sanjana Singh</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />
              <span>Sanjana Singh</span>
            </div>
            <div className="button">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />
              <p>
                <span>Sanjana Singh</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>    
            </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />
              <p>
                <span>Sanjana Singh</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>    
            </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />
              <p>
                <span>Sanjana Singh</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>    
            </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />   
            <div className='online' />
                <span>Sanjana Singh</span>
             </div>
            <span>1 min ago</span>    
            </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />   
            <div className='online' />
                <span>Sanjana Singh</span>
             </div>
            <span>1 min ago</span>    
            </div>
            <div className='user'>
            <div className='userInfo'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///8AAAD7+/txcXH4+Pijo6N9fX3AwMDh4eHT09PIyMjx8fHl5eVbW1vX19fr6+uurq5qamogICC3t7c3NzePj48/Pz8MDAyGhoYsLCycnJxWVlZLS0sxMTEYGBhiYmL256iuAAADlklEQVRoge1ayZajMAxkD0uAkAXCEvL/f9kvPUg2CQHLyH0Z13HidmFZLkvlcRwLCwsLCwsLCwsOBIcwGh7j+Bii8JD9HW8c1u4MdRf/CXHybNwPNHlinLh4fvL+Q16YZb59I37h7pkjLq9rzK57PZpiTtaJX0jNMF/e15hXVf6W6+7JOPNwK4LfnfWCousNc6fS9FUySyivqEzGvDyLQC8c4UIEfuTOtQGnvi8PuOOAmpc53N7LEw7pOJkznPbwfZDIhpKROoJJL2ujDjAq4mMuFefE/ebLNFTurYHjeirSkYF0r4b7BQh5y1U9QP5ct4fC8V7JRhJ81UWLZVc8zN6gHsWgnWQlYKGOKSuBCPEUa7DVSncS3G88lwgopFLhV0yDQxbq6VQ3SjE8njlP9qSirZIygwb4LNRT5tRKMhEMBqivStRZzUk9BfysdCeULSd1RzmqIAI3FmrSUSWJwCYSykI6ynduArZvUBk8UBJjG1DiK7SSsNVKn6kACKKCQkE9w5NlYinu5skOGvUAKcGDiG9WmlAX9mydNlb3G4vB8PD1fB40XOfV4sObjoI78tQov8Blr2Zuz79oR+r2nl930cNOl7ffw110+y/XdpnjEGYrSVhHj0WNTB84gOtMIyS/zP9QydIXvz65mZ1ANq782cqTSPqpZcxuQDY3zZ7hJYnj5BJWs39Wq2WoCN6NqgUwdR2f3NEWs2+I2ZEtlUWwmihzFNU69dOUMx3n68QvDCac6cDfJn6hYk/xd292BbwuqfeR220fRbeuu0VR/3j/rWLM8+Mwm/paneIMbzAvO178udzUbK8wxVmatsmXHpeyw+wxpmFKddmOdqOvC4pnm8JiIcnM+WplXzLb4tKDx3lzurRl5C7FXConVj79O/1h6ZZWFGgh8zvdSpE6ykIhxGdXey+mUTApASn9cz+R4YEm2WBYtY/62405QywyoTXVd2kxcuQiEw+4rrKAcquZdTKwhNRsRNIdn77nbx2xaK0NgzTRcjawzdK6AY/w1zoVEzgEmsIAYqTz5gWfrWlDofjTvQ1IFO3uDXabnmgQb4KCznHQjTg882jECwBHm1okwtttrs2MkkYVJNjqHc8ncItQNxsMjB2NDAgD9QVmys9xj+036qnh1Nq1O5idqS0hupbwerIjyzDPiB4H/F+QXeXVpKXEWqVs9FJkBkhVmhTDxbPLogi1qC0sLCwsLCws/l/8AF+iIHzbWd7FAAAAAElFTkSuQmCC' alt="" />   
            <div className='online' />
                <span>Sanjana Singh</span>
             </div>
            <span>1 min ago</span>    
            </div>
        </div>
        
      </div>
    </div>
  )
}
