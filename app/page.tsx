export default function EventsPage() {
  return (
    <>
      {/* Announcement bar */}
      <div style={{background:'#1a2744', color:'white', textAlign:'center', padding:'10px 20px', fontSize:'13px', fontWeight:500, display:'flex', alignItems:'center', justifyContent:'center', gap:'20px'}}>
        Voted Top Choice Wellness Centre 2026
        <a href="https://4pointshealth.janeapp.com/" style={{color:'white', textDecoration:'none', border:'1px solid rgba(255,255,255,0.55)', borderRadius:'20px', padding:'4px 18px', fontSize:'12px', fontWeight:600}}>Book Today</a>
      </div>

      {/* Nav */}
      <nav style={{background:'white', borderBottom:'1px solid #e8e4df', padding:'0 48px', display:'flex', alignItems:'center', justifyContent:'space-between', height:'90px', position:'sticky', top:0, zIndex:100, boxShadow:'0 2px 10px rgba(0,0,0,0.06)'}}>
        <a href="https://www.4pointshealth.com" style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
          <img src="/4Pointslogo.jpg" alt="4 Points Health and Wellness" style={{height:'80px', width:'auto'}} />
        </a>
        <div style={{display:'flex', alignItems:'center', gap:'32px'}}>
          <a href="https://www.4pointshealth.com" style={{color:'#4a4540', fontSize:'14px', textDecoration:'none', fontWeight:500}}>Home</a>
          <a href="https://www.4pointshealth.com/wellness-services" style={{color:'#4a4540', fontSize:'14px', textDecoration:'none', fontWeight:500}}>Treatments</a>
          <a href="https://www.4pointshealth.com/our-story" style={{color:'#4a4540', fontSize:'14px', textDecoration:'none', fontWeight:500}}>About Us</a>
          <a href="https://www.4pointshealth.com/contact-3" style={{color:'#4a4540', fontSize:'14px', textDecoration:'none', fontWeight:500}}>Contact</a>
          <a href="tel:7807055775" style={{background:'#1a2744', color:'white', padding:'10px 26px', fontSize:'13px', fontWeight:700, letterSpacing:'0.5px', textDecoration:'none', borderRadius:'30px'}}>☎ CALL NOW</a>
        </div>
      </nav>

      {/* Hero — split layout */}
      <div style={{display:'grid', gridTemplateColumns:'5fr 7fr', minHeight:'380px'}}>
        <div style={{background:'linear-gradient(135deg, #1a2744 0%, #243560 100%)', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px'}}>
          <img src="/4Pointslogo.jpg" alt="" style={{width:'220px', filter:'brightness(0) invert(1)', opacity:0.15}} />
        </div>
        <div style={{background:'white', padding:'64px 56px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h1 style={{fontSize:'clamp(34px, 4vw, 54px)', fontWeight:700, color:'#1a1a1a', lineHeight:1.15, marginBottom:'20px'}}>4 Points Community Events</h1>
          <p style={{fontSize:'16px', color:'#5a5550', lineHeight:1.85, fontWeight:300, maxWidth:'520px'}}>
            "Welcome to the 4 Points Community. Our workshops and classes are designed to help you move better, feel stronger, and connect deeper. Browse our upcoming events below and join us in-studio!"
          </p>
        </div>
      </div>

      {/* Main content on warm background */}
      <div style={{background:'#f4e8e3'}}>

        {/* Weekly Movement Classes */}
        <div style={{maxWidth:'1200px', margin:'0 auto', padding:'72px 40px 0'}}>
          <h2 style={{textAlign:'center', fontSize:'clamp(28px, 4vw, 48px)', color:'#4a70a8', fontWeight:600, marginBottom:'20px'}}>Weekly Movement Classes</h2>
          <p style={{textAlign:'center', fontSize:'15px', color:'#5a5550', lineHeight:1.85, maxWidth:'760px', margin:'0 auto 52px'}}>
            Join our weekly movement classes at 4 Points Health and Wellness in Edmonton. From high-energy TRX and ConfiDANCE to restorative Lunchtime Stretches, our expert-led sessions are designed for all fitness levels in a supportive community environment.
          </p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'24px', marginBottom:'72px'}}>
            {[
              {
                title: 'Lunchtime Stretch Break: Thursdays',
                day: 'Thu, May 21',
                location: '4 Points Health and Wellness',
                desc: 'This class is all about easing tension, improving posture, and boosting mental clarity — all in under an hour.',
                url: 'https://www.4pointshealth.com/event-details/lunchtime-stretch-break-thursdays-2026-05-21-12-00',
                cta: 'Sign Up',
                bg: 'linear-gradient(180deg, rgba(26,39,68,0.45) 0%, rgba(26,39,68,0.92) 55%), linear-gradient(135deg, #2a5f7f 0%, #1a3a5a 100%)',
              },
              {
                title: 'TRX Group Class',
                day: 'Thu, May 21',
                location: '4 Points Health and Wellness',
                desc: 'TRX Group Class with Naissa. Build your strongest, most resilient body using the power of suspension training. Master six foundational movements and progress through dynamic variations...',
                url: 'https://www.4pointshealth.com/event-details/trx-group-class-2026-05-21-17-30',
                cta: 'Details',
                bg: 'linear-gradient(180deg, rgba(20,30,50,0.35) 0%, rgba(20,30,50,0.92) 55%), linear-gradient(135deg, #1a3050 0%, #2a4a70 100%)',
              },
              {
                title: 'TRX Group Class Fridays',
                day: 'Fri, May 22',
                location: '4 Points Health and Wellness',
                desc: 'TRX Group Class with Naissa. Build your strongest, most resilient body using the power of suspension training. Master six foundational movements and progress through dynamic variations...',
                url: 'https://www.4pointshealth.com/event-details/trx-group-class-fridays-2026-05-22-09-00-1',
                cta: 'Sign Up',
                bg: 'linear-gradient(180deg, rgba(20,30,50,0.35) 0%, rgba(20,30,50,0.92) 55%), linear-gradient(135deg, #1a3050 0%, #2a4a70 100%)',
              },
            ].map((event) => (
              <div key={event.title} style={{borderRadius:'8px', overflow:'hidden', background:event.bg, display:'flex', flexDirection:'column', minHeight:'400px', boxShadow:'0 4px 20px rgba(0,0,0,0.15)'}}>
                <div style={{padding:'16px 18px'}}>
                  <span style={{background:'rgba(255,255,255,0.18)', color:'white', fontSize:'11px', fontWeight:600, letterSpacing:'0.5px', padding:'5px 14px', borderRadius:'4px', border:'1px solid rgba(255,255,255,0.3)'}}>Multiple Dates</span>
                </div>
                <div style={{flex:1}} />
                <div style={{padding:'22px 26px', color:'white'}}>
                  <div style={{fontSize:'13px', color:'rgba(255,255,255,0.75)', marginBottom:'4px'}}>{event.day} &nbsp;|&nbsp; {event.location}</div>
                  <h3 style={{fontSize:'21px', fontWeight:700, marginBottom:'10px', lineHeight:1.3}}>{event.title}</h3>
                  <p style={{fontSize:'13px', lineHeight:1.65, color:'rgba(255,255,255,0.82)', marginBottom:'20px'}}>{event.desc}</p>
                  <a href={event.url} style={{display:'inline-block', background:'#4a8fbe', color:'white', fontSize:'14px', fontWeight:600, padding:'10px 30px', borderRadius:'30px', textDecoration:'none'}}>{event.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Workshops */}
        <div style={{maxWidth:'1200px', margin:'0 auto', padding:'0 40px 88px'}}>
          <h2 style={{textAlign:'center', fontSize:'clamp(28px, 4vw, 48px)', color:'#4a70a8', fontWeight:600, marginBottom:'20px'}}>Wellness Workshops /Immersions</h2>
          <p style={{textAlign:'center', fontSize:'15px', color:'#5a5550', lineHeight:1.85, maxWidth:'760px', margin:'0 auto 52px'}}>
            Deepen your healing journey with our specialized wellness workshops. Featuring unique sessions like Yin & Massage and Acupuncture Sound Baths, these 2-hour immersions provide intensive relaxation and physical restoration.
          </p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'24px'}}>
            <div style={{borderRadius:'8px', overflow:'hidden', background:'linear-gradient(180deg, rgba(30,20,10,0.3) 0%, rgba(20,14,6,0.92) 55%), linear-gradient(135deg, #5a3a10 0%, #8a6030 100%)', display:'flex', flexDirection:'column', minHeight:'400px', boxShadow:'0 4px 20px rgba(0,0,0,0.15)'}}>
              <div style={{padding:'16px 18px'}}>
                <span style={{background:'rgba(200,169,81,0.35)', color:'#f5d98a', fontSize:'11px', fontWeight:600, letterSpacing:'0.5px', padding:'5px 14px', borderRadius:'4px', border:'1px solid rgba(200,169,81,0.5)'}}>Special Event</span>
              </div>
              <div style={{flex:1}} />
              <div style={{padding:'22px 26px', color:'white'}}>
                <div style={{fontSize:'13px', color:'rgba(255,255,255,0.75)', marginBottom:'4px'}}>Sat, Jun 06 &nbsp;|&nbsp; 4 Points Health and Wellness</div>
                <h3 style={{fontSize:'21px', fontWeight:700, marginBottom:'10px', lineHeight:1.3}}>Ink for Impact:</h3>
                <p style={{fontSize:'13px', lineHeight:1.65, color:'rgba(255,255,255,0.82)', marginBottom:'20px'}}>
                  For one day, we're turning our space into something different. Ink 4 Impact brings together local tattoo artists and community members, with every tattoo supporting veterans and first responders. To participate, book your appointment and select your design in advance.
                </p>
                <a href="https://4pointshealth.janeapp.com/locations/ink-4-impact/book#/discipline/32/treatment/747" style={{display:'inline-block', background:'#4a8fbe', color:'white', fontSize:'14px', fontWeight:600, padding:'10px 30px', borderRadius:'30px', textDecoration:'none'}}>Sign Up</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer style={{background:'#6b8dbe', color:'white', padding:'60px 48px 32px'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'48px', paddingBottom:'48px', borderBottom:'1px solid rgba(255,255,255,0.2)'}}>
          <div>
            <div style={{marginBottom:'20px'}}>
              <img src="/4Pointslogo.jpg" alt="4 Points Health and Wellness" style={{height:'44px', width:'auto', filter:'brightness(0) invert(1)', opacity:0.9}} />
            </div>
            <p style={{fontSize:'14px', lineHeight:1.85, marginBottom:'20px', maxWidth:'240px', color:'rgba(255,255,255,0.85)'}}>Your partner in holistic health and wellness in Edmonton, Alberta. Providing expert care for a balanced life.</p>
            <div style={{fontSize:'14px', marginBottom:'6px'}}>11634 142 Street, Suite 110</div>
            <div style={{fontSize:'14px', marginBottom:'6px'}}>Edmonton, AB T5M 1V4</div>
            <div style={{fontSize:'14px', marginBottom:'6px'}}><a href="tel:7807055775" style={{color:'white', textDecoration:'none'}}>780.705.5775</a></div>
            <div style={{fontSize:'14px'}}><a href="mailto:info@4pointshealth.com" style={{color:'white', textDecoration:'none'}}>info@4pointshealth.com</a></div>
          </div>
          <div>
            <h4 style={{fontSize:'13px', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'20px'}}>Quick Links</h4>
            <ul style={{listStyle:'none', padding:0, margin:0}}>
              {[
                ['Home', 'https://www.4pointshealth.com'],
                ['Treatments', 'https://www.4pointshealth.com/wellness-services'],
                ['Conditions', 'https://www.4pointshealth.com/back-pain'],
                ['About', 'https://www.4pointshealth.com/our-story'],
                ['Events', '/'],
                ['Contact', 'https://www.4pointshealth.com/contact-3'],
              ].map(([label, url]) => (
                <li key={label} style={{marginBottom:'10px'}}>
                  <a href={url} style={{color:'rgba(255,255,255,0.82)', textDecoration:'none', fontSize:'14px'}}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:'13px', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'20px'}}>Contact Us</h4>
            <div style={{fontSize:'14px', color:'rgba(255,255,255,0.85)', lineHeight:2}}>
              <div>11634 142 Street</div>
              <div>Suite 110</div>
              <div>Edmonton, AB</div>
              <div style={{marginBottom:'14px'}}>T5M 1V4</div>
              <div><a href="tel:7807055775" style={{color:'white', textDecoration:'underline'}}>780.705.5775</a></div>
              <div><a href="mailto:info@4pointshealth.com" style={{color:'white', textDecoration:'underline'}}>info@4pointshealth.com</a></div>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:'13px', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'20px'}}>Follow Us</h4>
            <div style={{display:'flex', gap:'20px', fontSize:'28px'}}>
              <a href="https://www.instagram.com/4pointshealth/" style={{color:'white', textDecoration:'none'}} aria-label="Instagram">𝕀</a>
              <a href="https://www.facebook.com/4pointshealth" style={{color:'white', textDecoration:'none'}} aria-label="Facebook">𝔽</a>
            </div>
          </div>
        </div>
        <div style={{maxWidth:'1200px', margin:'24px auto 0', display:'flex', justifyContent:'space-between', fontSize:'12px', color:'rgba(255,255,255,0.55)'}}>
          <span>4 Points Health and Wellness 2024 &nbsp;|&nbsp; <a href="https://www.4pointshealth.com/privacy-policy" style={{color:'rgba(255,255,255,0.55)', textDecoration:'none'}}>Privacy</a> &nbsp;|&nbsp; <a href="https://www.4pointshealth.com/accessibility" style={{color:'rgba(255,255,255,0.55)', textDecoration:'none'}}>Accessibility</a></span>
          <span>events.4pointshealth.com</span>
        </div>
      </footer>
    </>
  );
}
