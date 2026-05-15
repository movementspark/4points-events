export default function EventsPage() {
  return (
    <>
      <div style={{background:'#1a2744', color:'white', textAlign:'center', padding:'8px 20px', fontSize:'12px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase'}}>
        Voted Top Choice Wellness Centre 2026 &nbsp;
        <a href="https://4pointshealth.janeapp.com/" style={{color:'#c8a951', textDecoration:'none'}}>Book Today →</a>
      </div>

      <nav style={{background:'white', borderBottom:'1px solid #e8e4df', padding:'0 40px', display:'flex', alignItems:'center', justifyContent:'space-between', height:'70px', position:'sticky', top:0, zIndex:100, boxShadow:'0 2px 12px rgba(0,0,0,0.07)'}}>
        <a href="https://www.4pointshealth.com" style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
          <img src="/4Pointslogo.jpg" alt="4 Points Health and Wellness" style={{height:'52px', width:'auto'}} />
        </a>
        <div style={{display:'flex', gap:'10px'}}>
          <a href="tel:7807055775" style={{background:'none', border:'2px solid #1a2744', color:'#1a2744', padding:'8px 16px', fontSize:'12px', fontWeight:900, letterSpacing:'1.5px', textTransform:'uppercase', textDecoration:'none'}}>Call Now</a>
          <a href="https://4pointshealth.janeapp.com/" style={{background:'#2a7f7f', border:'2px solid #2a7f7f', color:'white', padding:'8px 20px', fontSize:'12px', fontWeight:900, letterSpacing:'1.5px', textTransform:'uppercase', textDecoration:'none'}}>Book Now</a>
        </div>
      </nav>

      <div style={{background:'linear-gradient(135deg, #1a2744 0%, #243560 60%, #1f4a6b 100%)', color:'white', padding:'64px 40px 52px', textAlign:'center'}}>
        <div style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#c8a951', fontWeight:700, marginBottom:'16px'}}>4 Points Community</div>
        <h1 style={{fontSize:'clamp(32px, 5vw, 52px)', fontWeight:600, lineHeight:1.15, marginBottom:'16px'}}>Classes, Workshops & Events</h1>
        <p style={{maxWidth:'620px', margin:'0 auto', fontSize:'15px', fontWeight:300, lineHeight:1.7, color:'rgba(255,255,255,0.82)'}}>Move better, feel stronger, and connect deeper. From weekly fitness classes to specialized wellness workshops — find your next experience with the 4 Points community.</p>
      </div>

      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'52px 40px 80px'}}>
        
        <div style={{marginBottom:'32px'}}>
          <div style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#2a7f7f', fontWeight:700, marginBottom:'8px'}}>Ongoing · Weekly</div>
          <h2 style={{fontSize:'30px', fontWeight:600, color:'#1a2744', marginBottom:'6px'}}>Weekly Movement Classes</h2>
          <p style={{color:'#9a9590', fontSize:'14px', fontWeight:300, lineHeight:1.6}}>Expert-led sessions for all fitness levels. From high-energy suspension training to restorative midday stretches.</p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'24px', marginBottom:'56px'}}>
          {[
            { title:'TRX Group Class', day:'Thursdays · 5:30 PM', desc:'Build your strongest, most resilient body using suspension training. Master six foundational movements with Naissa.', url:'https://www.4pointshealth.com/event-details/trx-group-class-2026-05-21-17-30', cta:'Details', bg:'linear-gradient(135deg, #1a4a6b, #2a7f7f)' },
            { title:'TRX Group Class — Fridays', day:'Fridays · 9:00 AM', desc:'Progressive suspension training on Friday mornings. A great way to wrap up your training week strong with Naissa.', url:'https://www.4pointshealth.com/event-details/trx-group-class-fridays-2026-05-22-09-00-1', cta:'Sign Up', bg:'linear-gradient(135deg, #1a4a6b, #2a7f7f)' },
            { title:'Lunchtime Stretch Break', day:'Thursdays · 12:00 PM', desc:'Ease tension, improve posture, and boost mental clarity — all in under an hour. Perfect midday reset.', url:'https://www.4pointshealth.com/event-details/lunchtime-stretch-break-thursdays-2026-05-21-12-00', cta:'Sign Up', bg:'linear-gradient(135deg, #2a5f4a, #3a9f7f)' },
          ].map((event) => (
            <div key={event.title} style={{background:'white', border:'1px solid #e8e4df', borderRadius:'4px', overflow:'hidden'}}>
              <div style={{height:'160px', background:event.bg, display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
                <span style={{fontSize:'36px', opacity:0.4}}>🏋️</span>
                <span style={{position:'absolute', top:'12px', left:'12px', background:'#2a7f7f', color:'white', fontSize:'10px', fontWeight:900, letterSpacing:'1.5px', textTransform:'uppercase', padding:'4px 10px', borderRadius:'2px'}}>Weekly</span>
              </div>
              <div style={{padding:'20px 22px 22px'}}>
                <div style={{fontSize:'11px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'#2a7f7f', marginBottom:'8px'}}>{event.day}</div>
                <h3 style={{fontSize:'20px', fontWeight:600, color:'#1a2744', marginBottom:'8px', lineHeight:1.3}}>{event.title}</h3>
                <p style={{fontSize:'13px', color:'#4a4540', lineHeight:1.6, fontWeight:300, marginBottom:'18px'}}>{event.desc}</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid #e8e4df', paddingTop:'14px'}}>
                  <span style={{fontSize:'12px', color:'#9a9590'}}>📍 4 Points Health</span>
                  <a href={event.url} style={{background:'#1a2744', color:'white', fontSize:'11px', fontWeight:900, letterSpacing:'1.5px', textTransform:'uppercase', padding:'8px 16px', textDecoration:'none', borderRadius:'2px'}}>{event.cta}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr style={{border:'none', borderTop:'1px solid #e8e4df', margin:'8px 0 48px'}} />

        <div style={{marginBottom:'32px'}}>
          <div style={{fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', color:'#2a7f7f', fontWeight:700, marginBottom:'8px'}}>Upcoming · Special Events</div>
          <h2 style={{fontSize:'30px', fontWeight:600, color:'#1a2744', marginBottom:'6px'}}>Wellness Workshops & Immersions</h2>
          <p style={{color:'#9a9590', fontSize:'14px', fontWeight:300, lineHeight:1.6}}>Deeper healing experiences featuring specialized sessions for intensive relaxation and restoration.</p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'24px', marginBottom:'56px'}}>
          <div style={{background:'white', border:'1px solid #e8e4df', borderRadius:'4px', overflow:'hidden'}}>
            <div style={{height:'160px', background:'linear-gradient(135deg, #1a2744, #c8a951)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
              <span style={{fontSize:'36px', opacity:0.4}}>🎨</span>
              <span style={{position:'absolute', top:'12px', left:'12px', background:'#c8a951', color:'#1a2744', fontSize:'10px', fontWeight:900, letterSpacing:'1.5px', textTransform:'uppercase', padding:'4px 10px', borderRadius:'2px'}}>Special Event</span>
            </div>
            <div style={{padding:'20px 22px 22px'}}>
              <div style={{fontSize:'11px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:'#2a7f7f', marginBottom:'8px'}}>Saturday, June 6</div>
              <h3 style={{fontSize:'20px', fontWeight:600, color:'#1a2744', marginBottom:'8px', lineHeight:1.3}}>Ink for Impact</h3>
              <p style={{fontSize:'13px', color:'#4a4540', lineHeight:1.6, fontWeight:300, marginBottom:'18px'}}>Local tattoo artists and community members — every tattoo supports veterans and first responders. Select your design in advance when booking.</p>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid #e8e4df', paddingTop:'14px'}}>
                <span style={{fontSize:'12px', color:'#9a9590'}}>📍 4 Points Health</span>
                <a href="https://4pointshealth.janeapp.com/locations/ink-4-impact/book#/discipline/32/treatment/747" style={{background:'#1a2744', color:'white', fontSize:'11px', fontWeight:900, letterSpacing:'1.5px', textTransform:'uppercase', padding:'8px 16px', textDecoration:'none', borderRadius:'2px'}}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer style={{background:'#1a2744', color:'rgba(255,255,255,0.75)', padding:'52px 40px 32px'}}>
        <div style={{maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:'40px', paddingBottom:'40px', borderBottom:'1px solid rgba(255,255,255,0.12)'}}>
          <div>
            <div style={{marginBottom:'16px'}}>
              <img src="/4Pointslogo.jpg" alt="4 Points Health and Wellness" style={{height:'40px', width:'auto', filter:'brightness(0) invert(1)', opacity:0.9}} />
            </div>
            <p style={{fontSize:'13px', lineHeight:1.7, fontWeight:300, marginBottom:'16px', maxWidth:'240px'}}>Your partner in holistic health and wellness in Edmonton, Alberta.</p>
            <div style={{fontSize:'13px', marginBottom:'6px'}}>11634 142 Street, Suite 110</div>
            <div style={{fontSize:'13px', marginBottom:'6px'}}>Edmonton, AB &nbsp;T5M 1V4</div>
            <div style={{fontSize:'13px', marginBottom:'6px'}}><a href="tel:7807055775" style={{color:'#c8a951', textDecoration:'none'}}>780.705.5775</a></div>
            <div style={{fontSize:'13px'}}><a href="mailto:info@4pointshealth.com" style={{color:'#c8a951', textDecoration:'none'}}>info@4pointshealth.com</a></div>
          </div>
          <div>
            <h4 style={{color:'white', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', fontWeight:700, marginBottom:'16px'}}>Treatments</h4>
            <ul style={{listStyle:'none'}}>
              {['Chiropractic', 'Physiotherapy', 'Massage Therapy', 'Acupuncture', 'Athletic Therapy', 'Psychology'].map(item => (
                <li key={item} style={{marginBottom:'8px'}}><a href={`https://www.4pointshealth.com/wellness-services/${item.toLowerCase().replace(' ','-')}`} style={{color:'rgba(255,255,255,0.65)', textDecoration:'none', fontSize:'13px', fontWeight:300}}>{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{color:'white', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', fontWeight:700, marginBottom:'16px'}}>Conditions</h4>
            <ul style={{listStyle:'none'}}>
              {[['Back Pain','back-pain'],['TMJ','tmj'],['Car Accident','treatments/car-accident-treatment'],['Tendinopathy','tendinitis-and-tendinopathy'],['Headache & Neck','headache-and-neck-pain']].map(([label, slug]) => (
                <li key={label} style={{marginBottom:'8px'}}><a href={`https://www.4pointshealth.com/${slug}`} style={{color:'rgba(255,255,255,0.65)', textDecoration:'none', fontSize:'13px', fontWeight:300}}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{color:'white', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', fontWeight:700, marginBottom:'16px'}}>About</h4>
            <ul style={{listStyle:'none'}}>
              {[['Our Story','our-story'],['Meet the Team','meet-the-team'],['FAQ','faq'],['Blog','blog'],['Contact','contact-3']].map(([label, slug]) => (
                <li key={label} style={{marginBottom:'8px'}}><a href={`https://www.4pointshealth.com/${slug}`} style={{color:'rgba(255,255,255,0.65)', textDecoration:'none', fontSize:'13px', fontWeight:300}}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{maxWidth:'1100px', margin:'24px auto 0', display:'flex', justifyContent:'space-between', fontSize:'12px', color:'rgba(255,255,255,0.4)'}}>
          <span>4 Points Health and Wellness 2024 &nbsp;|&nbsp; <a href="https://www.4pointshealth.com/privacy-policy" style={{color:'rgba(255,255,255,0.4)', textDecoration:'none'}}>Privacy</a></span>
          <span>events.4pointshealth.com</span>
        </div>
      </footer>
    </>
  );
}