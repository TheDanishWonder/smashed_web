import "./App.css";
import androidDownload from "./images/google-play-badge.png";
import appleDownload from "./images/app-store-badge.png";
import beerGif from "./images/BeerLoading.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Smashed</h1>
        <h3 className="UnderTitle">The last drinking app you will ever need</h3>
        <div className="downloads">
          <a href="https://play.google.com/store/apps/details?id=com.idupont.smashed">
            <img
              src={androidDownload}
              className="Android-download-badge"
              alt="android-download-badge"
            />
          </a>
          <a href="https://www.google.com/">
            <img
              src={appleDownload}
              className="Apple-download-badge"
              alt="apple-download-badge"
            />
          </a>
        </div>
        <div>
          <a href="https://i.pinimg.com/originals/cd/c0/80/cdc080b56fd1249b96d5edb7b2c43d5e.gif">
            <img src={beerGif} className="BeerGif" alt="beer-factory-gif" />
          </a>
        </div>
      </header>
      <div>
        <div className="Privacy">
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us. It is iDupont's policy to respect
            your privacy regarding any information we may collect from you
            across our website,
            <a href="http://smasheddrinkinggame.com">
              http://smasheddrinkinggame.com
            </a>
            , and other sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
          <p>This policy is effective as of 9 November 2020.</p>
          <p>
            <a
              href="https://getterms.io"
              title="Generate a free privacy policy"
            >
              Privacy Policy created with GetTerms.
            </a>
          </p>
        </div>
        <hr className="divider"/>
        <div className="App-Usage">
          <h2>App Usage</h2>
          <p>
            The user of the app agree to be fully responsible for any
            consequences that may result from the use of Smashed.
          </p>
        </div>
        <hr className="divider"/>
        <div className="Terms">
          <h2>Terms &amp; Conditions</h2>
          <p>
            By downloading or using the app, these terms will automatically
            apply to you – you should make sure therefore that you read them
            carefully before using the app. You’re not allowed to copy, or
            modify the app, any part of the app, or our trademarks in any way.
            You’re not allowed to attempt to extract the source code of the app,
            and you also shouldn’t try to translate the app into other
            languages, or make derivative versions. The app itself, and all the
            trade marks, copyright, database rights and other intellectual
            property rights related to it, still belong to Nicklas Dupont.
          </p>
          <p>
            Nicklas Dupont is committed to ensuring that the app is as useful
            and efficient as possible. For that reason, we reserve the right to
            make changes to the app or to charge for its services, at any time
            and for any reason. We will never charge you for the app or its
            services without making it very clear to you exactly what you’re
            paying for.
          </p>
          <p>
            The Smashed app stores and processes personal data that you have
            provided to us, in order to provide my Service. It’s your
            responsibility to keep your phone and access to the app secure. We
            therefore recommend that you do not jailbreak or root your phone,
            which is the process of removing software restrictions and
            limitations imposed by the official operating system of your device.
            It could make your phone vulnerable to malware/viruses/malicious
            programs, compromise your phone’s security features and it could
            mean that the Smashed app won’t work properly or at all.
          </p>
          <div>
            <p>
              The app does use third party services that declare their own Terms
              and Conditions.
            </p>
            <p>
              Link to Terms and Conditions of third party service providers used
              by the app
            </p>
            <ul>
              <li>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Services
                </a>
              </li>
            </ul>
          </div>
          <p>
            You should be aware that there are certain things that Nicklas
            Dupont will not take responsibility for. Certain functions of the
            app will require the app to have an active internet connection. The
            connection can be Wi-Fi, or provided by your mobile network
            provider, but Nicklas Dupont cannot take responsibility for the app
            not working at full functionality if you don’t have access to Wi-Fi,
            and you don’t have any of your data allowance left.
          </p>
          <p></p>
          <p>
            If you’re using the app outside of an area with Wi-Fi, you should
            remember that your terms of the agreement with your mobile network
            provider will still apply. As a result, you may be charged by your
            mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third party charges. In
            using the app, you’re accepting responsibility for any such charges,
            including roaming data charges if you use the app outside of your
            home territory (i.e. region or country) without turning off data
            roaming. If you are not the bill payer for the device on which
            you’re using the app, please be aware that we assume that you have
            received permission from the bill payer for using the app.
          </p>
          <p>
            Along the same lines, Nicklas Dupont cannot always take
            responsibility for the way you use the app i.e. You need to make
            sure that your device stays charged – if it runs out of battery and
            you can’t turn it on to avail the Service, Nicklas Dupont cannot
            accept responsibility.
          </p>
          <p>
            With respect to Nicklas Dupont’s responsibility for your use of the
            app, when you’re using the app, it’s important to bear in mind that
            although we endeavour to ensure that it is updated and correct at
            all times, we do rely on third parties to provide information to us
            so that we can make it available to you. Nicklas Dupont accepts no
            liability for any loss, direct or indirect, you experience as a
            result of relying wholly on this functionality of the app.
          </p>
          <p>
            At some point, we may wish to update the app. The app is currently
            available on Android &amp; iOS – the requirements for both
            systems(and for any additional systems we decide to extend the
            availability of the app to) may change, and you’ll need to download
            the updates if you want to keep using the app. Nicklas Dupont does
            not promise that it will always update the app so that it is
            relevant to you and/or works with the Android &amp; iOS version that
            you have installed on your device. However, you promise to always
            accept updates to the application when offered to you, We may also
            wish to stop providing the app, and may terminate use of it at any
            time without giving notice of termination to you. Unless we tell you
            otherwise, upon any termination, (a) the rights and licenses granted
            to you in these terms will end; (b) you must stop using the app, and
            (if needed) delete it from your device.
          </p>
          <p>
            <strong>Changes to This Terms and Conditions</strong>
          </p>
          <p>
            I may update our Terms and Conditions from time to time. Thus, you
            are advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Terms and Conditions on
            this page.
          </p>
          <p>These terms and conditions are effective as of 2020-11-09</p>
          <p>
            <strong>Contact Us</strong>
          </p>
          <p>
            If you have any questions or suggestions about my Terms and
            Conditions, do not hesitate to contact me at dupontworks@gmail.com.
          </p>
          <p>
            This Terms and Conditions page was generated by -
            <a
              href="https://app-privacy-policy-generator.nisrulz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
               App Privacy Policy Generator
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
