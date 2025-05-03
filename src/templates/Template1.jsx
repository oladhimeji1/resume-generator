function Template1(props) {
  return (
    <div id="temp1" className="max-w-6xl mx-auto min-h-50 p-1 bg-white">
      <div id="wrapper" className="flex space-x-6">
        <div className="flex-1/3">
          <section id="header">
            <h2 className="text-4xl font-serif font-bold">{props.name}</h2>
            <p className="text-emerald-700">Experienced Project Manager</p>

            <div className="flex items-center space-x-4 text-xs">
              <p>09130327299</p>
              <p>godstimepious33@gmail.com</p>
              <p>Port Harcourt, Nigeria</p>
              <p>https://www.godstimeweb.vercel.app</p>
            </div>
          </section>

          <section id="summary" className="mt-2">
            <h2 className="text-md font-bold">SUMMARY</h2>
            <div className="border-b-1 border-zinc-400 my-2"></div>
            <p className="text-sm text-zinc-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              incidunt dolorum explicabo, quo beatae, inventore natus vitae sunt
              harum, non quae consequatur esse aspernatur maiores perferendis
              sint facere impedit deserunt! Minus veritatis voluptas earum
              voluptates consequatur dolor quos. Sequi, odio?
            </p>
          </section>

          <section id="experience" className="mt-2">
            <h2 className="text-md font-bold">EXPERIENCE</h2>
            <div className="border-b-1 border-zinc-400 my-2"></div>

            {/* work experience container */}
            <div className="">
              {/* work itemm 1 */}
              <div>
                <div className="flex items-center- justify-between mb-2">
                  <p>Senior React Developer</p>
                  <p>09/2029 - Present</p>
                </div>
                <div className="flex items-center- justify-between">
                  <p className="text-emerald-900 font-bold">GoMail</p>
                  <p>NewYork, USA</p>
                </div>
                <p className="text-sm text-zinc-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  veniam aut sunt maxime laborum itaque voluptatem, eos officiis
                  odio ex, veritatis nostrum excepturi!
                </p>

                <ul className="mt-3 list-disc list-inside mb-3">
                  <li className="text-sm text-zinc-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, eos exercitationem ex beatae omnis harum quam
                    ducimus cum molestiae!
                  </li>
                  <li className="text-sm text-zinc-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, eos exercitationem ex beatae omnis harum quam
                    ducimus cum molestiae!
                  </li>
                  <li className="text-sm text-zinc-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, eos exercitationem ex beatae omnis harum quam
                    ducimus cum molestiae!
                  </li>
                </ul>
              </div>
              {/* work itemm 2 */}
              <div>
                <div className="flex items-center- justify-between mb-2">
                  <p>Project Manager</p>
                  <p>09/2023 - 2029</p>
                </div>
                <div className="flex items-center- justify-between">
                  <p className="text-emerald-900 font-bold">Facebook Inc</p>
                  <p>Texas, USA</p>
                </div>
                <p className="text-sm text-zinc-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  veniam aut sunt maxime laborum itaque voluptatem, eos officiis
                  odio ex, veritatis nostrum excepturi!
                </p>

                <ul className="mt-3 list-disc list-inside mb-3">
                  <li className="text-sm text-zinc-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, eos exercitationem ex beatae omnis harum quam
                    ducimus cum molestiae!
                  </li>
                  <li className="text-sm text-zinc-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, eos exercitationem ex beatae omnis harum quam
                    ducimus cum molestiae!
                  </li>
                  <li className="text-sm text-zinc-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, eos exercitationem ex beatae omnis harum quam
                    ducimus cum molestiae!
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="education" className="mt-2">
            <h2 className="text-md font-bold">EDUCATION</h2>
            <div className="border-b-1 border-zinc-400 my-2"></div>
            <div>
              {/* education item 1 */}
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Software Engineering</p>
                  <p className="text-emerald-900 font-bold">
                    Harvard University
                  </p>
                </div>
                <p>2019 - 3032</p>
              </div>
              {/* education item 2 */}
              <div className="flex justify-between mb-2">
                <div>
                  <p className="italic">Computer Engineering</p>
                  <p className="text-emerald-900 font-bold">
                    Cambridge Univestiy
                  </p>
                </div>
                <p>2015 - 2019</p>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-emerald-900 flex-1 p-4 text-white">
          {/* personal data */}
          <section>
            <h2 className="font-bold">BIO-DATA</h2>
            <div>
              <ul>
                <li>Date of Birth: 7th September 2005</li>
                <li>State of Origin: Rivers State</li>
                <li>Sex: Male</li>
                <li>Marital Status: Single</li>
                <li>LGA: Ahoada West</li>
                <li>Relgion: Muslim</li>
                <li>Nationality: Saudi Arabia</li>
              </ul>
            </div>
          </section>
          <div className="border-b-1 border-zinc-400 my-2"></div>
          {/* core skills data */}
          <section>
            <h2 className="font-bold">CORE SKILLS</h2>
            <div>
              <ul className="list-decimal list-inside">
                <li>
                  Knowledge and Usage of Programming Languages (HTML, CSS,
                  JavaScript, Tailwind CSS, ReactJS)
                </li>
                <li>Proficiency in Computer Graphics Application.</li>
                <li>Proficiency in Microsoft Applications.</li>
              </ul>
            </div>
          </section>
          <div className="border-b-1 border-zinc-400 my-2"></div>
          {/*  hobbies data */}
          <section>
            <h2 className="font-bold">HOBBIES</h2>
            <div>
              <ul className="list-decimal list-inside">
                <li>Reading</li>
                <li>Listening to Music </li>
                <li>Programming</li>
              </ul>
            </div>
          </section>
          <div className="border-b-1 border-zinc-400 my-2"></div>
          {/* referree  data */}
          <section>
            {/* the referres letter (s) will be added dynamically */}
            <h2 className="font-bold">REFEREES(S)</h2>
            <div className="flex flex-col space-y-4">
              {/* item 1 */}
              <div>
                <p>MRS. ROSANNAH ISAIAH DICKSON</p>
                <p> Blessed Computer Center</p>
                <p>Managing Director</p>
                <p>Tel: 00011222333</p>
              </div>
              <div>
                <p>MR. THANKGOD PAUL</p>
                <p>Tregi Tech Solutions</p>
                <p>CEO/Managing Director </p>
                <p>Tel: 00011222333</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Template1;
