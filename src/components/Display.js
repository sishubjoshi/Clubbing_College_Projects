import React from 'react'


export default function Display({data}) {
  return (
    <div className="container post-store">
        {data['posts'].map(a => {
            return (
                
                    <div className="card card-body post-ccp" key={a.post_id}>
                        <p id="heading">{a.heading}</p>
                        <div>
                        <p id="post">{a.post}</p>
                        <small>
                            {a.username}
                            
                        </small>
                        </div>
                        
                    </div>
                
            )
        })}
    </div>
  )
}
