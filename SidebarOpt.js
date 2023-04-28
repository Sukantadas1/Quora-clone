import React from 'react'

export default function SidebarOpt() {
    return (
        <div className='SidebarOptions'>
            <div className="SidebarOpt">
                <div className="create_space">
                    <span>+</span>Create <p>Space</p>
                </div>
            </div>
            <div className="sidebarOpt effect">
                    <img src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg" alt="" />
                    <p>Mathematics</p>
            </div>
            <div className="sidebarOpt effect">
                    <img src="https://cdn.w600.comps.canstockphoto.com/design-stock-images_csp28696054.jpg" alt="" />
                    <p>Design</p>
            </div>
            <div className="sidebarOpt effect">
                <div className='dot'>
                    <img  src="https://qph.cf2.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg" alt="" />
                </div>
                    <p>Books</p>
            </div>
            <div className="sidebarOpt effect">
                <div className='dot'>
                    <img src="https://c8.alamy.com/comp/R15A3K/psychology-concept-3d-illustration-R15A3K.jpg" alt="" />
                </div>
                    <p>Physcology</p>
            </div>
            <div className="sidebarOpt effect">
                <div className='dot'>
                    <img src="https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg" alt="" />
                </div>
                    <p>Technology</p>
            </div>
            <div className="sidebarOpt edit effect">
                    <img src="https://qph.cf2.quoracdn.net/main-thumb-t-301972-100-hAFIkW06GeZ9twV4zOj5ub38amd0MHCE.jpeg" alt="" />
                    <p>School Buylling</p>
            </div>
            <div className="sidebarOpt edit effect">
                    <img src="https://qph.cf2.quoracdn.net/main-thumb-t-156047-100-X1MRhYSmlJydjMoRPo0XPbt3vyRe69HB.jpeg" alt="" />
                    <p>General Knowledge</p>
            </div>
            <div className="sidebarOpt effect">
                <div className='dot'>
                    <img src="https://qph.cf2.quoracdn.net/main-thumb-t-12623-100-mwpdrahgmnrsbrbjjrxppqkbhggtqqon.jpeg" alt="" />
                </div>
                    <p>Neurology</p>
            </div>
            <hr />
            <div className="links">
            <ul>
                <li><span>About</span>&#12539; <span>Career</span>&#12539;
                <span>Terms</span> <span>Privacy</span>&#12539;<span>Acceptable Use</span>&#12539;
                <span>Bussinesses </span> <span>Press</span>&#12539;<span>Your Ad Choices</span>&#12539;<span>Grievance Officer</span></li>
                {/* <li>Career</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Acceptable use</li>
                <li>Bussinesses</li>
                <li>Press</li>
                <li>Your Ad Choices</li>
                <li>Grievance Officer</li> */}
            </ul>
            </div>
        </div>
    )
}
