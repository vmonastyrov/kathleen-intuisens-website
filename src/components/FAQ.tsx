import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'What are the admission requirements?',
      answer: 'Our admission requirements vary by program, but generally include a high school diploma or equivalent, transcripts, and a personal statement. Some programs may require additional materials or tests.'
    },
    {
      question: 'What financial aid options are available?',
      answer: 'We offer various financial aid options including scholarships, grants, work-study programs, and student loans. Our financial aid office can help you explore all available options.'
    },
    {
      question: 'Can I visit the campus?',
      answer: 'Yes! We encourage prospective students to visit our campus. You can book a guided tour through our website or attend one of our open house events.'
    },
    {
      question: 'What is the student-to-faculty ratio?',
      answer: 'We maintain a low student-to-faculty ratio of 15:1, ensuring personalized attention and meaningful interactions with professors.'
    },
    {
      question: 'What career services do you offer?',
      answer: 'Our career services team provides resume reviews, interview preparation, job search assistance, and networking opportunities with alumni and industry professionals.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section" style={{ padding: '6rem 1.5rem' }}>
      <div className="container">
        <div className="has-text-centered mb-6">
          <span style={{ color: 'var(--color-cyan)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Have Questions?</span>
          <h2 className="title is-1 mt-3" style={{ fontWeight: 800, fontSize: '3.5rem' }}>Frequently Asked Questions</h2>
          <p className="subtitle is-4 mt-4" style={{ color: '#666', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            Find answers to common questions about our programs
          </p>
        </div>

        <div className="column is-8 is-offset-2 mt-6">
          {faqs.map((faq, index) => (
            <div key={index} style={{
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              overflow: 'hidden',
              backgroundColor: 'white'
            }}>
              <div
                className="is-flex is-justify-content-space-between is-align-items-center"
                style={{
                  cursor: 'pointer',
                  padding: '1.5rem 2rem',
                  transition: 'background-color 0.2s',
                  backgroundColor: activeIndex === index ? '#F3F4F6' : 'white'
                }}
                onClick={() => toggleFAQ(index)}
                onMouseEnter={(e) => {
                  if (activeIndex !== index) e.currentTarget.style.backgroundColor = '#F9FAFB'
                }}
                onMouseLeave={(e) => {
                  if (activeIndex !== index) e.currentTarget.style.backgroundColor = 'white'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{faq.question}</h3>
                <span style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: activeIndex === index ? 'var(--color-cyan)' : '#E5E7EB',
                  color: activeIndex === index ? 'white' : '#6B7280',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  transition: 'all 0.3s'
                }}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div style={{
                  padding: '0 2rem 1.5rem 2rem',
                  backgroundColor: '#F3F4F6',
                  animation: 'fadeIn 0.3s ease-in'
                }}>
                  <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', margin: 0 }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
