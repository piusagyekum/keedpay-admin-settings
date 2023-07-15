import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="mx-5 bg-light " style={{maxWidth:"70%"}}>

      <header className="">
        <h6 className="p-3 text-white rounded rounded-5" style={{background:"var(--primary-color)"}}>ADMIN / SETTINGS</h6>
       </header>
       <main className="mx-5 py-5">
          <div class="accordion" id="settings">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#network-settings" aria-expanded="false" aria-controls="network-settings">
                Network Settings
              </button>
            </h2>
            <div id="network-settings" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#settings">
              <div class="accordion-body">
                <div className="border p-2" style={{maxWidth:"300px", borderRadius:"20px"}}>
                <div className="container-fluid">

                  <div className="row justify-content-between">
                        <div className="col-4"></div>
                        <div className="col-3"><label className="form-label">MFS</label></div>
                        <div className="col-3">USSD</div>
                        <div className="col-4">MTN</div>
                        <div className="col-3">
                          <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id=""/>
                          </div>
                        </div>
                        <div className="col-3">
                          <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" id=""/>
                            </div>
                        </div>
                        <div className="col-4">AirtelTigo</div>
                        <div className="col-3">
                          <div class="form-check form-switch">
                              <input class="form-check-input" type="checkbox" id=""/>
                          </div>
                        </div>
                        <div className="col-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id=""/>
                          </div>
                        </div>
                        <div className="col-4">Vodafone</div>
                        <div className="col-3">
                          <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id=""/>
                          </div>
                        </div>
                        <div className="col-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id=""/>
                          </div>
                        </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#functionality-settings" aria-expanded="false" aria-controls="functionality-settings">
            Functionality Settings
          </button>
        </h2>
        <div id="functionality-settings" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#settings">
          <div class="accordion-body">
            <div className="border p-3" style={{borderRadius:"20px",overflow:"hidden",maxWidth:"500px"}}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-2">Send</div>
                  <div className="col-2">Receive</div>
                  <div className="col-2">TopUp</div>
                  <div className="col-2">Withdraw</div>

                  <div className="col-3">MTN</div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>

                  <div className="col-3">AirtelTigo</div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>

                  <div className="col-3">Vodafone</div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id=""/>
                    </div>
                  </div>

                  
                

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#limit-settings" aria-expanded="false" aria-controls="limit-settings">
            Limit Settings
          </button>
        </h2>
        <div id="limit-settings" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#settings">
          <div class="accordion-body">
            <div className="p-2">
                <div className="container-fluid">
                  <div className="row gx-2 gy-3">
                    <div className="col-3 fw-bold">Limit</div>
                    <div className="col-2 fw-bold text-center">Personal</div>
                    <div className="col-2 fw-bold text-center">Merchant</div>
                    <div className="col-2 fw-bold text-center">Agent</div>
                    <div className="col-2 fw-bold text-center">Corporate</div>

                    <div className="col-3">Tier 1</div>
                    <div className="col-2">
                      <input type="text" className="form-control rounded-5" />
                    </div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-3">Tier 2</div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-2">
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col-3">Whitelist</div>
                    <div className="col-sm-3 col-md-2 ">
                      <button className="btn text-white" style={{backgroundColor:"var(--primary-color)"}}>Edit</button>
                    </div>
                    <div className="col-sm-3 col-md-2">
                      <button className="btn text-white" style={{backgroundColor:"var(--primary-color)"}}>Apply</button>
                    </div>
                  
                  

                  </div>
                </div>
              </div>      
            </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#global-settings" aria-expanded="false" aria-controls="global-settings">
            Global Settings
          </button>
        </h2>
        <div id="global-settings" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#settings">
          <div class="accordion-body">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 col-lg-3">
                  <label htmlFor="new-registration">New Registration</label>
                </div>
                <div className="col-2">
                  <div className="form-check form-switch">
                    <input type="checkbox" id="new-registration" className="form-check-input"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 col-lg-3 ">
                  <label htmlFor="login">Login</label>
                </div>
                <div className="col-2">
                  <div className="form-check form-switch">
                    <input type="checkbox" id="login" className="form-check-input"/>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>


<div class="accordion my-5" id="settings">
  
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Corporate Payment
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#settings">
      <div class="accordion-body">
        <div className="container-fluid">
          <div className="row g-1">
            <div className="col-12">
              <h6>External TopUp</h6>
            </div>
             <div className=" col-md-4 col-lg-3">
              <div>
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
             </div>
             <div className="col-md-4 col-lg-2">
              <div>
                <label htmlFor="" className="form-label">ID</label>
                <select id="" className="form-select"></select>
              </div>
             </div>
             <div className="col-md-4 col-lg-3">
              <div>
                <label htmlFor="" className="form-label">Current Balance</label>
                <input type="text" className="form-control" />
              </div>
             </div>
             <div className="col-md-4 col-lg-3">
              <div>
                <label htmlFor="" className="form-label">TopUp Amount</label>
                <input type="text" className="form-control" />
              </div>
             </div>
             <div className="col-md-4 col-lg-1" >
              <div style={{height:"70px"}} className="d-flex align-items-end">
                <button className="btn text-white" style={{backgroundColor:"var(--primary-color)"}}>Apply</button>
              </div>
             </div>
          </div>
          <div className="row g-1 mt-3">
            <div className="col-12">
              <h6>Internal TopUp</h6>
            </div>
             <div className=" col-md-4 col-lg-3">
              <div>
                <label htmlFor="" className="form-label">Name</label>
                <select className="form-select"></select>
              </div>
             </div>
             <div className="col-md-4 col-lg-2">
              <div>
                <label htmlFor="" className="form-label">From Account</label>
                <select id="" className="form-select"></select>
              </div>
             </div>
             <div className="col-md-4 col-lg-3">
              <div>
                <label htmlFor="" className="form-label">To Account</label>
                <select className="form-select"></select>
              </div>
             </div>
             <div className="col-md-4 col-lg-3">
              <div>
                <label htmlFor="" className="form-label">Amount</label>
                <input type="text" className="form-control" />
              </div>
             </div>
             <div className="col-md-4 col-lg-1" >
              <div style={{height:"70px"}} className="d-flex align-items-end">
                <button className="btn text-white" style={{backgroundColor:"var(--primary-color)"}}>Apply</button>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


       </main>


   
  
    </div>
  );
}

export default App;
