import Image from "next/image";

export default function MassageServices() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h2 style={{ textAlign: "center" }}>
        <strong>Massage Services</strong>
      </h2>

      <h3 style={{ textAlign: "center" }}>
        Ultimate relaxation massage at home!
      </h3>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Image
          src="/images/spa-massage.jpg"
          alt="Massage Spa"
          width={636}
          height={431}
        />
      </div>

      <p>
        A hectic week with loads of work sure does call for a chilling and
        relaxing weekend! But often you don’t get the chance to do that.
        There are so many things people plan for the weekends — hiking,
        spending time in nature, or enjoying short picnics with friends
        and family.
      </p>

      <p>
        But have you ever thought of just literally relaxing? Relaxing every
        nerve in your body and getting energized for the week ahead?
        Massage, or even a <em><strong>full body massage</strong></em>,
        helps loosen not just your muscles but also the tension in your body!
      </p>

      {/* Replace WordPress form shortcode with your form component */}
      <h4>[Contact Form Here]</h4>

      <h4><b>Massage – Your Ultimate Relaxation!</b></h4>

      <p>
        Wouldn’t it be divine to lie down and have someone give you the
        perfect massage? A gentle rub on pressure points removes stress
        and creates a calm atmosphere. All massage and salon services
        require time from busy routines — but booking appointments
        can be difficult.
      </p>

      <p>
        With GharFix, you can now book a <strong>full body massage</strong>
        at home. Our specialists provide customized wellness approaches
        in a calm and relaxing setting. Enjoy exclusive massage services
        or feel refreshed with our <em><strong>home massages</strong></em>.
      </p>

      <h4><b>Environment that Harbours Calmness</b></h4>

      <p>
        The atmosphere is curated to relax the mind, body, and soul.
        GharFix massage services provide a peaceful environment that
        promotes wellness through high-quality facilities and professional care.
      </p>

      <p>
        Our therapies benefit people physically, mentally, and emotionally,
        helping them manage everyday stress and maintain overall well-being.
      </p>

      <h4><b>Why GharFix?</b></h4>

      <ul>
        <li>You can now book a massage at home in just a click</li>
        <li>Pick any time of the week through your smartphone</li>
        <li>Trusted masseuse ensures safety</li>
        <li>Cost-efficient regular massage sessions</li>
        <li>Supportive company environment</li>
        <li>Top-quality brands and services</li>
        <li>Highest level of integrity in all services</li>
        <li>We respect and support our people</li>
      </ul>

      <p>
        When it comes to a trustworthy online massage platform, GharFix
        becomes your best choice. We provide effective
        <em><strong> 24-hour massage services </strong></em>
        to help your body get the nourishment it needs.
      </p>

      <p>
        What are you waiting for? Log on to GharFix today and enjoy a
        weekend full of relaxation — a mini vacation from stress!
      </p>

    </div>
  );
}