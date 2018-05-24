import React from 'react'

const Section = props => {
  const { children, className } = props
  return (
    <section className={className} style={{ minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', width: '90%', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}

export default Section
