import React from "react";

const Tribute = () => {
  return (
    <main id="main">
      <header className="header-div">
        <div className="content">
          <h1 id="title">Nikola Tesla</h1>
          <h3>The man who invented the twentieth century</h3>
        </div>
        <figure className="img-div">
          <img
            src="https://www.elitereaders.com/wp-content/uploads/2016/04/nikola-tesla-feat.jpg"
            alt="Nikola Tesla"
            id="NikolaTeslaImage"
            className="img-responsive"
          />
          <br />
        </figure>
      </header>

      <div className="wrapper">
        <section className="powerTodBm">
          <div className="converter">
            <form method="POST" className="calculator1">
              <p>Millwatts to dBm Converter </p>
              <div className="form-group">
                <label for="power1">Power in mW </label>
                <input
                  type="number"
                  step="0.00001"
                  name="power"
                  className="form-control power1"
                  id="power1"
                  placeholder="milliwatt (mW)"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary first">
                  Calculate
                </button>
              </div>
            </form>
            <div className="result1">
              <label for="dBm1">Power in dBm</label>
              <input
                type="text"
                name="dBm1"
                className="form-control dBm1"
                id="dBm1"
                placeholder="dBm"
              />
            </div>
          </div>
        </section>

        <section id="tribute-info" className="tribute-info">
          <h3 className="headline">Here's a time line of Tesla's life:</h3>
          <ul>
            <li>
              <strong>1856</strong> - Born on 10 July in Smiljan, Austrian
              Empire (modern-day Croatia)
            </li>
            <li>
              <strong>1875</strong> - Tesla enrolled at Austrian Polytechnic in
              Graz, Austria, on a Military Frontier scholarship. During his
              first year, Tesla never missed a lecture, earned the highest
              grades possible, passed nine exams (nearly twice as many as
              required), started a Serb cultural club, and even received a
              letter of commendation from the dean of the technical faculty to
              his father, which stated, "Your son is a star of first rank."
            </li>
            <li>
              <strong>1881</strong> - Tesla moved to Budapest, Hungary, to work
              under Tivadar Puskás at a telegraph company, the Budapest
              Telephone Exchange. During his employment, Tesla made many
              improvements to the Central Station equipment and claimed to have
              perfected a telephone repeater or amplifier, which was never
              patented nor publicly described.
            </li>
            <li>
              <strong>1884</strong> - Tesla emigrated to the United States. He
              began working almost immediately at the Machine Works on
              Manhattan's Lower East Side, an overcrowded shop with a workforce
              of several hundred machinists, laborers, managing staff, and 20
              "field engineers" struggling with the task of building the large
              electric utility in that city.
            </li>
            <li>
              <strong>1887</strong> - Tesla developed an induction motor that
              ran on alternating current (AC), a power system format that was
              rapidly expanding in Europe and the United States because of its
              advantages in long-distance, high-voltage transmission. The motor
              used polyphase current, which generated a rotating magnetic field
              to turn the motor (a principle that Tesla claimed to have
              conceived in 1882). This innovative electric motor was a simple
              self-starting design that did not need a commutator, thus avoiding
              sparking and the high maintenance of constantly servicing and
              replacing mechanical brushes.
            </li>

            <blockquote cite="" className="quote">
              <p>
                "I don't care that they stole my idea . . I care that they don't
                have any of their own"
              </p>
              <cite>-- Nikola Tesla</cite>
            </blockquote>

            <li>
              <strong>1894</strong> - Tesla began investigating what he referred
              to as radiant energy of "invisible" kinds after he had noticed
              damaged film in his laboratory in previous experiments (later
              identified as "Roentgen rays" or "X-Rays"). His early experiments
              were with Crookes tubes, a cold cathode electrical discharge tube.
              Tesla may have inadvertently captured an X-ray image—predating, by
              a few weeks, Wilhelm Röntgen's December 1895 announcement of the
              discovery of X-rays when he tried to photograph Mark Twain
              illuminated by a Geissler tube, an earlier type of gas discharge
              tube. The only thing captured in the image was the metal locking
              screw on the camera lens.
            </li>
            <li>
              <strong>1898</strong> - Tesla demonstrated a boat that used a
              coherer-based radio control—which he dubbed "telautomaton"—to the
              public during an electrical exhibition at Madison Square Garden.
              The crowd that witnessed the demonstration made outrageous claims
              about the workings of the boat, such as magic, telepathy, and
              being piloted by a trained monkey hidden inside. Tesla tried to
              sell his idea to the US military as a type of radio-controlled
              torpedo, but they showed little interest.
            </li>
            <li>
              <strong>1900</strong> - Returning to New York, Tesla began
              construction on Long Island of a wireless world broadcasting
              tower, with $150,000 capital from the American financier J.
              Pierpont Morgan.
            </li>
            <li>
              <strong>1906</strong> - He demonstrated a 200 horsepower (150
              kilowatts) 16,000 rpm bladeless turbine. During 1910–1911, at the
              Waterside Power Station in New York, several of his bladeless
              turbine engines were tested at 100–5,000 hp.
            </li>
            <li>
              <strong>1912</strong> - He crafted "a plan to make dull students
              bright by saturating them unconsciously with electricity," wiring
              the walls of a schoolroom and, "saturating [the schoolroom] with
              infinitesimal electric waves vibrating at high frequency. The
              whole room will thus, Mr. Tesla claims, be converted into a
              health-giving and stimulating electromagnetic field or 'bath.'"
            </li>
            <li>
              <strong>1917</strong> - On the magazine "Electrical Experimenter",
              Tesla postulated that electricity could be used to locate
              submarines via using the reflection of an "electric ray" of
              "tremendous frequency," with the signal being viewed on a
              fluorescent screen (a system that has been noted to have a
              superficial resemblance to modern radar).
            </li>
            <li>
              <strong>1928</strong> - Tesla received U.S. Patent 1,655,114, for
              a biplane capable of taking off vertically (VTOL aircraft) and
              then of being "gradually tilted through manipulation of the
              elevator devices" in flight until it was flying like a
              conventional plane.
            </li>
            <li>
              <strong>1932</strong> - Tesla claimed he had invented a motor that
              would run on cosmic rays. He told reporters that, after 35 years
              of work, he was on the verge of producing proof of a new form of
              energy. He claimed it was a theory of energy that was "violently
              opposed" to Einsteinian physics, and could be tapped with an
              apparatus that would be cheap to run and last 500 years.
            </li>
            <li>
              <strong>1937</strong> - At the age of 81, after midnight one
              night, Tesla left the Hotel New Yorker to make his regular commute
              to the cathedral and library to feed the pigeons. While crossing a
              street a couple of blocks from the hotel, Tesla was unable to
              dodge a moving taxicab and was thrown to the ground. His back was
              severely wrenched and three of his ribs were broken in the
              accident.
            </li>
            <li>
              <strong>1943</strong> - On 7 January, at the age of 86, Tesla died
              alone in Room 3327 of the New Yorker Hotel.
            </li>
          </ul>
          <blockquote cite="" className="quote secondQuote">
            <p>
              "If you want to find the secrets of the universe, think in terms
              of energy, frequency and vibration."
            </p>
            <cite>-- Nikola Tesla</cite>
          </blockquote>
          <h4>
            If you have time, you should read more about this incredible human
            being on his
            <a
              id="tribute-link"
              href="https://en.wikipedia.org/wiki/Nikola_Tesla"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
            entry.
          </h4>
        </section>

        <section className="dBmToPower">
          <div className=" converter">
            <form method="POST" className="calculator2">
              <div className="form-group">
                <p>dBm to Millwatts Converter </p>
                <label for="dBm2">Power in dBm</label>
                <input
                  type="number"
                  step="0.00001"
                  name="dBm2"
                  className="form-control dBm2"
                  id="dBm2"
                  placeholder="decibel (dBm)"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Calculate
                </button>
              </div>
            </form>
            <div className="result2">
              <label for="power2">Power in mW</label>
              <input
                type="text"
                name="power2"
                className="form-control power2"
                id="power2"
                placeholder="milliWatt (mW)"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Tribute;
