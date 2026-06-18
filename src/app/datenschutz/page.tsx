import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz — German Cannabis Standard',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <nav className="glass sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="GCS Logo" className="h-6 w-auto invert" />
          </Link>
          <Link href="/" className="px-4 py-2 rounded-full bg-solar-500/10 border border-solar-500/30 text-solar-400 text-sm font-medium hover:bg-solar-500/20 transition-all">
            ← Zurück
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="w-12 h-1 bg-solar-500 mb-6 rounded-full" />
          <h1 className="text-3xl sm:text-4xl font-light text-white mb-2">Datenschutzerklärung</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Stand: Februar 2024</p>
        </div>

        <div className="space-y-12 text-[var(--color-text-secondary)] leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-medium text-white mb-6">Datenschutz auf einen Blick</h2>
            <h3 className="text-white/90 font-medium mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Datenerfassung auf dieser Website</h3>
            <h4 className="text-white/80 font-medium mb-1 mt-4">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>

            <h4 className="text-white/80 font-medium mb-1 mt-4">Wie erfassen wir Ihre Daten?</h4>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p className="mt-2">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

            <h4 className="text-white/80 font-medium mb-1 mt-4">Wofür nutzen wir Ihre Daten?</h4>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

            <h4 className="text-white/80 font-medium mb-1 mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            <p className="mt-2">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-6">Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3 className="text-white/90 font-medium mb-2 mt-6">Externes Hosting</h3>
            <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p className="mt-2">Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
            <p className="mt-2">Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
            <p className="mt-2">Wir setzen folgende(n) Hoster ein:</p>
            <p className="mt-1">INWX GmbH</p><p>Prinzessinnenstr. 30</p><p>10969 Berlin</p>
            <h3 className="text-white/90 font-medium mb-2 mt-6">Auftragsverarbeitung</h3>
            <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-6">Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-white/90 font-medium mb-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="mt-2 space-y-1"><p>GCS — German Cannabis Standard GmbH</p><p>Kantstraße 24</p><p>10623 Berlin</p><p className="mt-2">Telefon: +49 (0)30 552 17 638</p><p>E-Mail: info@germancannabisstandard.de</p></div>
            <p className="mt-2">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Speicherdauer</h3>
            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN.</p>
            <p className="mt-2">WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG EINZULEGEN.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Auskunft, Löschung und Berichtigung</h3>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-6">Datenerfassung auf dieser Website</h2>
            <h3 className="text-white/90 font-medium mb-2">Cookies</h3>
            <p>Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
            <p className="mt-2">Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies).</p>
            <p className="mt-2">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden. Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p>
            <p className="mt-2">Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Optimierung der Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung.</p>
            <p className="mt-2">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Einwilligung mit Complianz</h3>
            <p>Unsere Website nutzt die Consent-Technologie von Complianz, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter dieser Technologie ist Complianz B.V., Kalmarweg 14-5, 9723 JG Groningen, Niederlande.</p>
            <p className="mt-2">Complianz wird auf unseren Servern gehostet, sodass keine Verbindung zu den Servern des Anbieters hergestellt wird. Der Einsatz von Complianz erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p className="mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>

            <h3 className="text-white/90 font-medium mb-2 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p className="mt-2">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
            <p className="mt-2">Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
