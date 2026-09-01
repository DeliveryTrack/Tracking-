function trackParcel(){
  const input=document.getElementById("mobile");
  const mobile=input.value.replace(/\D/g,"");
  const message=document.getElementById("message");
  const result=document.getElementById("result");
  result.classList.add("hidden");
  message.textContent="";

  if(mobile.length!==10){
    message.textContent="Please enter a valid 10 digit mobile number.";
    return;
  }

  const parcel=parcels.find(p=>p.mobile===mobile);
  if(!parcel){
    message.textContent="No parcel found for this mobile number.";
    return;
  }

  result.innerHTML=`
    <h2 style="margin-top:0">📦 Parcel Details</h2>
    <div class="row"><span class="key">Customer</span><span class="value">${parcel.name}</span></div>
    <div class="row"><span class="key">Parcel ID</span><span class="value">${parcel.parcelId}</span></div>
    <div class="row"><span class="key">Project</span><span class="value">${parcel.project}</span></div>
    <div class="row"><span class="key">Courier</span><span class="value">${parcel.courier}</span></div>
    <div class="row"><span class="key">Dispatch Location</span><span class="value">${parcel.dispatchLocation}</span></div>
    <div class="row"><span class="key">Route</span><span class="value">${parcel.route}</span></div>
    <div class="row"><span class="key">Status</span><span class="value"><span class="status">${parcel.status}</span></span></div>
    <div class="row"><span class="key">Expected Delivery</span><span class="value">${parcel.expected}</span></div>
    <div class="row"><span class="key">Last Updated</span><span class="value">${parcel.updated}</span></div>
    <h3>Tracking History</h3>
    <div class="timeline">
      ${parcel.timeline.map(x=>`<div class="step"><strong>${x[0]}</strong><div class="small">${x[1]}</div></div>`).join("")}
    </div>`;
  result.classList.remove("hidden");
}
