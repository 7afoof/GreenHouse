import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function BecomeSeller({ sellerLanding, isLogin, setAddUser, ListUsers }) {
  const navigate = useNavigate();
  const itLogin = isLogin;
  const [email, setEmail] = useState("");
  const emailExists = ListUsers.some(user => user.email === email);

  function handelEmail() {
    if (!email || emailExists) {
      alert("Please fill in email or this email already exists !!");
      return;
    }
    setAddUser((prev) => ({
      ...prev,
      email: email,
    }));
    navigate("/register");
  }

  if (itLogin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <div>
        <p>{sellerLanding.badge}</p>
        <h1>
          {sellerLanding.title_start} {sellerLanding.title_end}
        </h1>
        <p>{sellerLanding.subtitle}</p>

        <div>
          <input
            type="email"
            value={email}
            placeholder={sellerLanding.email_placeholder}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button onClick={handelEmail}>{sellerLanding.btn_start}</button>
        </div>

        <p>{sellerLanding.no_card}</p>

        <div>
          <img src="/becomeseller.png" alt="imgBioProducts" />
        </div>
      </div>

      <div>
        <h1>{sellerLanding.why_title}</h1>

        <div>
          <div>
            <h3>{sellerLanding.b1_title}</h3>
            <p>{sellerLanding.b1_desc}</p>
          </div>

          <div>
            <h3>{sellerLanding.b2_title}</h3>
            <p>{sellerLanding.b2_desc}</p>
          </div>

          <div>
            <h3>{sellerLanding.b3_title}</h3>
            <p>{sellerLanding.b3_desc}</p>
          </div>
        </div>

        <div>
          <h2>{sellerLanding.pricing_title}</h2>
          <p>{sellerLanding.pricing_sub}</p>
          <button>
            <Link to="/pricing">{sellerLanding.view_plans}</Link>
          </button>
        </div>
      </div>
    </div>
  );
  // sellerLanding: {
  //       badge: "For Moroccan Cooperatives",
  //       title_start: "Grow Your Cooperative",
  //       title_end: "Online",
  //       subtitle: "We provide the technology, marketing, and logistics. You provide the authentic Moroccan products.",
  //       email_placeholder: "Enter your email address",
  //       btn_start: "Get Started",
  //       no_card: "No credit card required for demo.",
  //       weekly_sales: "Weekly Sales",
  //       why_title: "Why Join GreenHouse?",
  //       b1_title: "Your Own Online Store",
  //       b1_desc: "A professional mini-site dedicated to your brand and story.",
  //       b2_title: "Access to Customers",
  //       b2_desc: "Reach thousands of buyers across Morocco without leaving your farm.",
  //       b3_title: "Marketing Done For You",
  //       b3_desc: "We run ads on Facebook and Instagram to drive sales to your products.",
  //       b4_title: "Easy Management",
  //       b4_desc: "Track orders, inventory, and earnings from a simple dashboard.",
  //       pricing_title: "Simple Pricing Plans",
  //       pricing_sub: "Starting from just 99 MAD/month.",
  //       view_plans: "View All Plans"
  //   },
}

export default BecomeSeller;
