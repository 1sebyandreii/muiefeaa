/* ============================================================
   BAZA DE ÎNTREBĂRI
   ============================================================ */

const INTREBARI = [
  // --- ECONOMETRIE (72 grile) ---
  {
    "materie": "Econometrie",
    "intrebare": "Instrumentul care stă la baza studierii legăturilor dintre fenomenele economice sub aspect cantitativ, prin aplicarea demersului econometric, este:",
    "optiuni": ["a) modelul pur aleator", "b) modelul pur determinist", "c) modelul econometric", "d) modelul economic"],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Un model econometric este folosit pentru:",
    "optiuni": [
     "a) analiza influenței diferitelor variabile independente, ignorând influența variabilei dependente",
     "b) evaluarea modului în care variabila dependentă explică modificările variabilelor independente",
     "c) analizarea relațiilor dintre variabila dependentă şi variabilele explicative specificate în model",
     "d) descrierea exclusivă a variației datelor din eșantion, fără interes pentru relațiile cauzale"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Considerând construirea unui model econometric pentru diferite fenomene economice, este corectă afirmaţia:",
    "optiuni": [
     "a) se lucrează doar cu baze de date de mari dimensiuni",
     "b) este suficientă specificarea ecuațiilor matematice",
     "c) modelul este semnificativ statistic dacă parametrii de regresie sunt semnificativ diferiți de 0",
     "d) nu este necesar să cunoaştem teoriile economice privind fenomenele modelate"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$. Parametrii care fac obiectul estimării și testării statistice sunt:",
    "optiuni": [
     "a) X şi Y",
     "b) X, Y și $\\epsilon$",
     "c) $\\beta_{0}$și $\\beta_{1}$"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$. Sunt corecte afirmaţiile:",
    "optiuni": [
     "a) variabilele modelului econometric sunt variabilele $\\beta_{0}$și $\\beta_{1}$",
     "b) parametrii modelului econometric sunt $\\beta_{0}$și $\\beta_{1}$",
     "c) variabilele modelului econometric sunt variabilele X şi Y"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Modelul de regresie conține:",
    "optiuni": [
     "a) variabile nespecificate",
     "b) variabile mixte",
     "c) variabile aleatoare",
     "d) estimatori"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Componenta aleatoare a unui model de regresie este reprezentată de:",
    "optiuni": [
     "a) variabilele independente",
     "b) variabila reziduală",
     "c) variabila dependentă",
     "d) media condiționată a variabilei dependente"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Includerea variabilei reziduale într-un model econometric este justificată prin:",
    "optiuni": [
     "a) cunoaşterea valorii exacte a parametrilor modelului",
     "b) existența de variabile explicative care nu au fost incluse explicit în model",
     "c) posibilitatea de a estima prin interval de încredere 95% parametrii modelului de regresie",
     "d) existenţa unei relații funcționale (perfecte) între X și Y"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "În modelul econometric, variabila reziduală reflectă / include efecte datorate:",
    "optiuni": [
     "a) influenței variabilelor omise sau a altor factori neobservați care influențează variabila dependentă (neincluderii în model a unor variabile independente importante)",
     "b) valorilor exacte ale parametrilor estimați",
     "c) specificării exacte a formei funcționale a modelului",
     "d) dependenței complet deterministe dintre variabila dependentă și variabilele independente"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie, un estimator al unui parametru reprezintă:",
    "optiuni": [
     "a) o variabilă aleatoare, care ia ca valori estimațiile determinate pe baza celor k eşantioane posibil de extras",
     "b) o valoare constantă, identică pentru orice eșantion extras din populație",
     "c) un set de valori prestabilite potrivit datelor colectate pentru un singur eșantion",
     "d) o valoare arbitrară, care depinde de hazard"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie, estimațiile parametrilor sunt:",
    "optiuni": [
     "a) valori generate întâmplător, fără utilizarea unui algoritm statistic",
     "b) valori estimate pentru parametri pe baza datelor unui eșantion",
     "c) valori teoretice ale parametrilor la nivelul întregii populații",
     "d) întotdeauna identice cu valorile reale ale parametrilor populației"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Proprietățile unui estimator sunt:",
    "optiuni": [
     "a) precizia",
     "b) convergența",
     "c) nedeplasarea",
     "d) \\[Toate variantele menționate (a, b, c) reprezintă proprietăți ale estimatorilor\\]"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Criteriul care stă la baza metodei celor mai mici pătrate, folosită în procesul de estimare a parametrilor modelului de regresie, este:",
    "optiuni": [
     "a) minimizarea sumei absolute a reziduurilor, pentru a obține o estimare robustă a parametrilor",
     "b) maximizarea coeficienților de regresie, pentru a asigura o corelație strânsă între variabilele independente şi dependente",
     "c) maximizarea variantei reziduurilor, adică a diferenței dintre valorile estimate și cele observate",
     "d) minimizarea sumei pătratelor reziduurilor, adică a diferențelor dintre valorile observate şi cele estimate ($\\sum_{}^{}e_{i}^{2} = \\min$)"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model liniar simplu, termenul liber reprezintă:",
    "optiuni": [
     "a) ordonata punctului în care dreapta de regresie intersectează axa orizontală",
     "b) valoarea medie a variabilei X pentru o valoare specificată a variabilei Y",
     "c) valoarea estimată a variabilei dependente Y atunci când variabila independentă X ia valoarea zero",
     "d) modificarea medie a variabilei Y produsă la modificarea cu o unitate a variabilei X"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model liniar simplu, panta dreptei reprezintă:",
    "optiuni": [
     "a) valoarea variabilei Y, corespunzătoare unei variații absolute a lui X cu o unitate",
     "b) media variației absolute a variabilei dependente Y, corespunzătoare unei variații absolute a lui X cu o unitate de măsură",
     "c) niciuna dintre variantele de mai sus",
     "d) valoarea variabilei dependente Y atunci când $X = 0$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Fie un model liniar simplu pentru care se cunoaște valoarea lui $r_{yx}$, $s_{x}$și $s_{y}$. Valoarea lui $b_{1}$poate fi determinată pe baza relației:",
    "optiuni": [
     "a) $b_{1} = R\\frac{s_{x}}{s_{y}}$",
     "b) $b_{1} = r_{yx}\\frac{s_{y}}{s_{x}}$",
     "c) $b_{1} = r_{yx}\\frac{s_{x}}{s_{y}}$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniar simplu $y = \\beta_{0} + \\beta_{1}X + \\epsilon$, identificați relația greşită:",
    "optiuni": [
     "a) $IC_{\\beta_{1}} = b_{1} \\pm t_{\\frac{\\alpha}{2};n - 2} \\cdot s_{b_{1}}$",
     "b) $IC_{\\beta_{1}} = b_{1} \\pm t_{calculat} \\cdot s_{b_{1}}$",
     "c) $P\\left( \\beta_{1} \\in IC_{\\beta_{1}} \\right) = 1 - \\alpha$",
     "d) $P\\left( \\beta_{1} \\notin IC_{\\beta_{1}} \\right) = \\alpha$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniară simplă este întotdeauna valabilă relația:",
    "optiuni": [
     "a) $\\rho = \\eta$",
     "b) $\\rho = \\eta^{2}$",
     "c) $\\rho^{2} = 1 - \\eta^{2}$",
     "d) $\\rho^{2} = \\eta^{2}$"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie liniară simplă, raportul de corelație dintre cele două variabile este egal cu:",
    "optiuni": [
     "a) raportul de determinație ridicat la puterea 2",
     "b) modulul coeficientului de corelație bivariată",
     "c) inversul pantei dreptei modelului de regresie",
     "d) produsul dintre abaterile standard ale variabilelor"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Valoarea coeficientului de corelație, pentru un model liniar simplu, este egală cu:",
    "optiuni": [
     "a) coeficientul de regresie $b_{1}$, pentru un model de regresie cu variabile standardizate",
     "b) panta dreptei modelului de regresie cu variabile nestandardizate",
     "c) pătratul raportului de determinație",
     "d) raportul de corelație"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru un model de regresie liniară simplă, coeficientul de corelație simplă sau bivariată:",
    "optiuni": [
     "a) este întotdeauna negativ, indiferent de sensul legăturii dintre variabile",
     "b) este egal cu raportul de determinație la pătrat",
     "c) este identic cu panta dreptei de regresie dacă variabilele sunt standardizate",
     "d) este egal cu 1, dacă variabila dependentă nu este corelată cu variabila independentă"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Alegeți afirmaţia corectă privind coeficientul de corelație $\\rho_{xy}$:",
    "optiuni": [
     "a) $\\rho_{xy}$reprezintă % variației lui Y explicate de variația lui X printr-un model liniar",
     "b) $\\rho_{xy}$reprezintă % variației lui Y explicate de variația lui X printr-un model oarecare",
     "c) $\\rho_{xy}$reprezintă corelația dintre x și y indiferent de forma modelului",
     "d) $\\rho_{xy}$reprezintă corelația dintre x şi y pentru un model liniar simplu"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Modelul liniar multiplu conține:",
    "optiuni": [
     "a) cel puțin k parametri, care este egal cu numărul de variabile independente plus unu",
     "b) cel puțin k parametri, care este egal cu numărul de variabile independente",
     "c) o variabilă dependentă explicată în raport cu o variabilă independentă și variabila reziduală",
     "d) cel puțin k parametri, egal cu numărul de variabile dependente plus unu"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Un coeficient de regresie într-un model liniar multiplu exprimă:",
    "optiuni": [
     "a) modificarea (variația) medie a variabilei dependente dacă o variabilă independentă, căreia îi este atașat, variază cu o unitate și celelalte variabile rămân constante",
     "b) intensitatea legăturii dintre variabila independentă, căreia îi este atașat, și variabila dependentă",
     "c) valoarea estimată a variabilei dependente pentru anumite niveluri ale variabilelor independente",
     "d) variația variabilelor independente dacă variabila dependentă variază cu o unitate"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație pentru un model liniar multiplu:",
    "optiuni": [
     "a) este un indicator al intensității legăturii dintre Y şi una dintre variabilele independente",
     "b) exprimă capacitatea modelului liniar multiplu de a explica variația variabilei dependente Y cu ajutorul variației simultane a variabilelor independente",
     "c) este egal cu valoarea absolută a coeficientului de corelație",
     "d) este un indicator al corelației dintre variabilele independente"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație este egal cu 1 sau 100% atunci când:",
    "optiuni": [
     "a) modelul de regresie explică în totalitate variația variabilei dependente",
     "b) legătura dintre variabila dependentă și setul de variabile independente incluse în model este foarte slabă",
     "c) variabilele independente explică în proporţie de 99% variația variabilei dependente",
     "d) variabila reziduală explică în proporţie de 99% variația variabilei dependente"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Raportul de corelație pentru un model de regresie liniară multiplă:",
    "optiuni": [
     "a) este un indicator al influenței variabilei dependente asupra variabilelor independente",
     "b) este egal cu suma valorilor absolute ale coeficienților de corelație bivariată",
     "c) măsoară intensitatea relației dintre variabila dependentă şi variabilele independente din modelul liniar",
     "d) exprimă efectul individual al fiecărei variabile independente asupra variabilei Y"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru a măsura intensitatea legăturii dintre o variabilă dependentă ($Y$) și un set de variabile explicative ($X_{1},X_{2}$), se va estima:",
    "optiuni": [
     "a) coeficientul $\\beta_{1}$",
     "b) coeficientul de regresie bivariată dintre $Y$şi $X_{1}$",
     "c) raportul de corelație multiplă",
     "d) coeficientul de corelație simplă dintre $X_{1}$şi $X_{2}$"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru a compara două modele de regresie liniară multiplă care conțin un număr diferit de variabile independente, este recomandată folosirea:",
    "optiuni": [
     "a) valorilor raportului de determinație $R^{2}$, deoarece oferă o imagine sintetică a legăturilor dintre variabile",
     "b) tuturor valorilor coeficienților de regresie parţială",
     "c) coeficienţilor de regresie standardizați ai variabilelor comune din cele două modele",
     "d) valorilor raportului de determinație ajustat ($R^{2}$ ajustat), care ține seama de numărul parametrilor din model"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie multiplă cu variabile standardizate, coeficienții de regresie:",
    "optiuni": [
     "a) sunt identici cu coeficienții de corelație bivariată",
     "b) sunt identici cu coeficienții de corelație parțială",
     "c) ajută la ierarhizarea importanței variabilelor independente în explicarea variației variabilei dependente",
     "d) au doar valori pozitive"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă un model liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\beta_{3}X_{3} + \\epsilon$explică semnificativ legătura dintre variabile, atunci:",
    "optiuni": [
     "a) cel puțin un factor explică semnificativ variația variabilei dependente",
     "b) toți factorii influențează semnificativ variația variabilei dependente",
     "c) toți parametrii modelului sunt semnificativi"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru un model liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\epsilon$, dacă parametrul $\\beta_{1}$este semnificativ statistic, atunci:",
    "optiuni": [
     "a) erorile sunt nule",
     "b) parametrul $\\beta_{2}$nu este semnificativ statistic",
     "c) modelul de regresie are cel puțin un factor care explică semnificativ variația variabilei dependente"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Testarea influenței marginale a unei variabile independente excluse dintr-un model multiplu presupune:",
    "optiuni": [
     "a) verificarea ipotezei nule potrivit căreia excluderea variabilei independente nu are o influenţă semnificativă asupra lui Y (sau utilizarea unui test Fisher)",
     "b) verificarea ipotezei nule potrivit căreia excluderea variabilei independente are o influență semnificativă asupra lui Y",
     "c) verificarea ipotezei nule potrivit căreia creșterea valorii variației explicate este semnificativă",
     "d) utilizarea unui test Student"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă influența marginală a unei variabile excluse dintr-un model de regresie liniar multiplu este semnificativă statistic, atunci:",
    "optiuni": [
     "a) Modelul cu variabila exclusă explică într-o pondere semnificativ mai mare variația variabilei dependente",
     "b) Puterea explicativă a modelului a scăzut semnificativ prin eliminarea acestei variabile din model",
     "c) Eliminarea variabilei din model este corectă",
     "d) Raportul de determinație crește semnificativ prin excluderea acestei variabile"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru a măsura intensitatea legăturii dintre o variabilă dependentă ($Y$) şi un set de variabile explicative ($X_{1},X_{2}$), se va estima:",
    "optiuni": [
     "a) raportul de corelație multiplă",
     "b) coeficientul de corelație simplă dintre $X_{1}$şi $X_{2}$",
     "c) coeficientul de regresie bivariată dintre $Y$şi $X_{1}$",
     "d) coeficientul $\\beta_{1}$"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "În testarea parametrului $\\eta$(sau a modelului de regresie), este utilizată statistica $F$. Care este relația după care se calculează valoarea lui $F_{calc}$?",
    "optiuni": [
     "a) $F_{calc} = \\frac{\\frac{ESS}{k - 1}}{\\frac{TSS}{n - 1}}$",
     "b) $F_{calc} = \\frac{\\frac{ESS}{k - 1}}{\\frac{RSS}{n - k}}$",
     "c) $F_{calc} = \\frac{\\frac{RSS}{n - k}}{\\frac{TSS}{n - 1}}$",
     "d) $F_{calc} = \\frac{\\frac{RSS}{n - k}}{\\frac{ESS}{k - 1}}$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Un estimator este convergent dacă:",
    "optiuni": [
     "a) varianța sa tinde spre valoarea parametrului atunci când volumul eșantionului tinde spre volumul populaţiei: $V\\left( \\widehat{\\theta} \\right) \\rightarrow \\theta$când $n \\rightarrow N$",
     "b) este nedeplasat și are varianța cea mai mică față de varianța oricărui alt estimator nedeplasat posibil pentru parametrul considerat",
     "c) media sau speranța matematică a acestuia este egală cu parametrul: $M\\left( \\widehat{\\theta} \\right) = \\theta$",
     "d) varianța sa tinde spre 0 atunci când volumul eșantionului tinde spre volumul populaţiei: $V\\left( \\widehat{\\theta} \\right) \\rightarrow 0$când $n \\rightarrow N$"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Testarea influenței marginale a unei variabile independente în cadrul unui model multiplu presupune:",
    "optiuni": [
     "a) utilizarea unui test Fisher",
     "b) ipoteza că reducerea valorii raportului de determinație nu este semnificativă",
     "c) utilizarea unui test Student"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "$R^{2}$(raportul de determinaţie) se calculează după relația:",
    "optiuni": [
     "a) $\\frac{TSS}{ESS}$",
     "b) $\\frac{RSS}{TSS}$",
     "c) $\\frac{TSS}{RSS}$",
     "d) $\\frac{ESS}{TSS}$"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Estimațiile sunt:",
    "optiuni": [
     "a) valori posibile ale estimatorilor",
     "b) valori estimate la nivelul populației",
     "c) mărimi fixe calculate la nivel de eșantion"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Modelul liniar multiplu conține:",
    "optiuni": [
     "a) cel puțin $k$parametri, care este egal cu numărul de variabile independente plus unu",
     "b) o variabilă dependentă explicată în raport cu o variabilă independentă și variabila reziduală",
     "c) cel puțin $k$parametri, care este egal cu numărul de variabile independente",
     "d) cel puțin $k$parametri, egal cu numărul de variabile dependente plus unu"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma: $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\epsilon$. Este corectă afirmaţia:",
    "optiuni": [
     "a) parametrii modelului sunt $\\beta_{0},\\beta_{1}$și $\\beta_{2}$",
     "b) este liniară cel mult una dintre legăturile liniare simple dintre variabila dependentă și variabilele independente",
     "c) parametrul de regresie $\\beta_{0}$arată nivelul mediu al variabilei dependente, atunci când variabilele independente se mențin constante",
     "d) variabilele independente ale modelului sunt $\\beta_{0},\\beta_{1}$și $\\beta_{2}$"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniar simplu: $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$, identificați relația greşită:",
    "optiuni": [
     "a) $P\\left( \\beta_{i} \\notin IC_{\\beta_{i}} \\right) = \\alpha$",
     "b) $IC_{\\beta_{i}} = b_{i} \\pm t_{calculat} \\cdot s_{{\\widehat{\\beta}}_{i}}$",
     "c) $P\\left( \\beta_{i} \\in IC_{\\beta_{i}} \\right) = 1 - \\alpha$",
     "d) $IC_{\\beta_{i}} = b_{i} \\pm t_{\\frac{\\alpha}{2};n - 2} \\cdot s_{{\\widehat{\\beta}}_{i}}$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă pentru testarea unui model de regresie liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\beta_{3}X_{3} + \\epsilon$, statistica test Fisher are un nivel de semnificație (p-value / Sig.) superior riscului asumat ($\\alpha$), atunci:",
    "optiuni": [
     "a) toți parametrii modelului sunt semnificativi diferiți de 0",
     "b) există legătură semnificativă între $Y$şi variabilele independente incluse în model",
     "c) cel puțin un factor explică semnificativ variația variabilei dependente",
     "d) nici un parametru nu este semnificativ statistic"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model econometric, componenta deterministă este:",
    "optiuni": [
     "a) $M\\left( Y|X \\right)$",
     "b) combinația liniară dintre variabilele independente și $\\epsilon$",
     "c) variabila reziduală",
     "d) regresia sau media condiționată"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație ($R^{2}$) este egal cu 1 dacă:",
    "optiuni": [
     "a) erorile de modelare sunt nule",
     "b) modelul explică în totalitate legătura dintre variabile",
     "c) variabilele din model sunt independente"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă un model de regresie liniară are panta egală cu zero, atunci între variabile:",
    "optiuni": [
     "a) nu există o legătură liniară",
     "b) $M\\left( Y|X \\right) = 0$",
     "c) există o legătură funcțională"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Modelul de regresie conține:",
    "optiuni": [
     "a) estimatori",
     "b) variabile nespecificate",
     "c) variabile mixte",
     "d) variabile aleatoare"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Instrumentul care stă la baza studierii legăturilor dintre fenomenele economice sub aspect cantitativ, prin aplicarea demersului econometric, este:",
    "optiuni": [
     "a) modelul econometric",
     "b) modelul pur determinist",
     "c) modelul pur aleator",
     "d) modelul economic"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Modelul econometric este utilizat pentru:",
    "optiuni": [
     "a) calculul variabilelor standardizate",
     "b) măsurarea relației de cauzalitate dintre variabilele economice",
     "c) estimarea volumului eșantionului",
     "d) estimarea influenței variabilei dependente asupra variabilelor independente"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Modelele econometrice pot fi:",
    "optiuni": [
     "a) liniare",
     "b) deterministe",
     "c) neliniare *(notă: ambele sunt corecte)*"
    ],
    "raspuns_corect": [
     "a",
     "c"
    ]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma: $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\epsilon$. Sunt corecte afirmaţiile:",
    "optiuni": [
     "a) variabilele trebuie să fie logaritmate pentru a construi un model semnificativ",
     "b) valorile variabilei dependente a modelului econometric sunt $\\beta_{0},\\beta_{1}$și $\\beta_{2}$",
     "c) variabilele modelului sunt $Y,X_{1},X_{2},\\epsilon$"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Componenta deterministă a modelului econometric liniar simplu este reprezentată de:",
    "optiuni": [
     "a) $M\\left( Y/X = x_{i} \\right) = \\epsilon$",
     "b) $M\\left( Y/X = x_{i} \\right) = \\beta_{0} + \\beta_{1}x_{i}$",
     "c) $M\\left( Y/X = x_{i} \\right) = \\beta_{0} + \\beta_{1}x_{i} + \\epsilon$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "În modelul de regresie liniară simplă de forma $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$, parametrul $\\beta_{1}$reprezintă:",
    "optiuni": [
     "a) o variabilă aleatoare",
     "b) panta dreptei de regresie",
     "c) variația medie absolută a variabilei independente la o variație absolută cu o unitate a variabilei dependente"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Estimațiile $b_{0}$și $b_{1}$ale parametrilor $\\beta_{0}$și $\\beta_{1}$, calculate pe baza datelor unui eşantion de volum $n$prin metoda celor mai mici pătrate, reprezintă:",
    "optiuni": [
     "a) valori reale şi semnificative",
     "b) variabile aleatoare de selecţie",
     "c) valori reale și cunoscute (sau mărimi fixe)"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Estimatorul unui parametru al modelului de regresie este:",
    "optiuni": [
     "a) o valoare reală și necunoscută",
     "b) o variabilă aleatoare",
     "c) o mărime fixă calculată la nivel de eșantion"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Estimatorul parametrului $\\beta_{1}$are următoarele trei proprietăți:",
    "optiuni": [
     "a) nedeplasare, convergență și eficienţă",
     "b) calitate, deplasare și simplitate",
     "c) precizie, risc și deplasare",
     "d) liniaritate, complexitate și sinteză"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Fie un model liniar simplu pentru care se cunoaşte valoarea lui $r_{yx}$, $s_{x}$și $s_{y}$. Valoarea lui $b_{1}$poate fi determinată pe baza relației:",
    "optiuni": [
     "a) $b_{1} = r_{yx} \\cdot \\frac{s_{y}}{s_{x}}$",
     "b) $b_{1} = R \\cdot \\frac{s_{x}}{s_{y}}$",
     "c) $b_{1} = r_{yx} \\cdot \\frac{s_{x}}{s_{y}}$"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "$R^{2}$se calculează după relația:",
    "optiuni": [
     "a) $\\frac{TSS}{ESS}$",
     "b) $\\frac{ESS}{TSS}$",
     "c) $\\frac{RSS}{TSS}$",
     "d) $\\frac{TSS}{RSS}$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație arată:",
    "optiuni": [
     "a) procentul variației variabilei dependente explicat de variația variabilei independente",
     "b) gradul de adecvare a modelului teoretic cu datele reale",
     "c) gradul de intensitate a legăturii dintre două variabile"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație este egal cu 1 sau 100% atunci când:",
    "optiuni": [
     "a) modelul de regresie explică în totalitate variația variabilei dependente",
     "b) legătura dintre variabila dependentă și setul de variabile independente incluse în model este foarte slabă",
     "c) variabilele independente explică în proporţie de 99% variația variabilei dependente",
     "d) variabila reziduală explică în proporţie de 99% variația variabilei dependente"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Alegeți afirmația corectă:",
    "optiuni": [
     "a) $\\rho_{xy}$reprezintă % variației lui Y explicate de variația lui X printr-un model liniar",
     "b) $\\rho_{xy}$reprezintă corelația dintre x şi y pentru un model liniar simplu",
     "c) $\\rho_{xy}$reprezintă corelația dintre x şi y indiferent de forma modelului",
     "d) $\\rho_{xy}$reprezintă % variației lui Y explicate de variația lui X printr-un model oarecare"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniar simplu este valabilă relaţia:",
    "optiuni": [
     "a) $\\rho^{2} = \\eta^{2}$",
     "b) $\\rho^{2} = \\eta$",
     "c) $\\rho = \\eta$",
     "d) $\\rho = \\eta^{2}$"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru a măsura intensitatea legăturii dintre o variabilă dependentă ($Y$) și un set de variabile explicative ($X_{1},X_{2}$), se va estima:",
    "optiuni": [
     "a) coeficientul de corelație simplă dintre $X_{1}$și $X_{2}$",
     "b) raportul de corelație multiplă",
     "c) coeficientul de regresie bivariată dintre $Y$și $X_{1}$",
     "d) coeficientul $\\beta_{1}$"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie multiplă cu variabile standardizate, coeficienții de regresie:",
    "optiuni": [
     "a) sunt identici cu coeficienții de corelație bivariată",
     "b) nu sunt semnificativi statistic pentru riscul $\\alpha$admis",
     "c) ajută la ierarhizarea importanței variabilelor independente în explicarea variaţiei variabilei dependente",
     "d) sunt identici cu coeficienții de corelație parțială"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniar simplu: $y = \\beta_{0} + \\beta_{1}X + \\epsilon$, identificați relația greşită:",
    "optiuni": [
     "a) $P\\left( \\beta_{i} \\in IC_{\\beta_{i}} \\right) = 1 - \\alpha$",
     "b) $IC_{\\beta_{i}} = b_{i} \\pm t_{\\alpha/2;n - 2} \\cdot s_{b_{i}}$",
     "c) $P\\left( \\beta_{i} \\notin IC_{\\beta_{i}} \\right) = \\alpha$",
     "d) $IC_{\\beta_{i}} = b_{i} \\pm t_{\\text{calculat}} \\cdot s_{b_{i}}$"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă influența marginală a unei variabile nou introduse într-un model de regresie liniar multiplu nu este semnificativă statistic, atunci:",
    "optiuni": [
     "a) Raportul de determinație scade semnificativ prin introducerea acestei variabile",
     "b) Raportul de determinație nu crește semnificativ prin introducerea acestei variabile",
     "c) Modelul cu variabila inclusă are mai puțini parametri deci mai multe grade de libertate",
     "d) Modelul cu variabila inclusă are o putere explicativă semnificativ mai mare comparativ cu modelul inițial"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Testarea influenței marginale a unei variabile independente excluse dintr-un model multiplu presupune:",
    "optiuni": [
     "a) verificarea ipotezei nule potrivit căreia excluderea variabilei independente are o influență semnificativă asupra lui Y",
     "b) utilizarea unui test Student",
     "c) verificarea ipotezei nule potrivit căreia creşterea valorii variației explicate este semnificativă",
     "d) verificarea ipotezei nule potrivit căreia excluderea variabilei independente nu are o influență semnificativă asupra lui Y"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă pentru testarea unui model de regresie liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\beta_{3}X_{3} + \\epsilon$, statistica test Fisher are un nivel de semnificație superior riscului asumat, atunci:",
    "optiuni": [
     "a) cel puțin un factor explică semnificativ variația variabilei dependente",
     "b) toți parametrii modelului sunt semnificativ diferiți de 0",
     "c) există legătură semnificativă între Y şi variabilele independente incluse în model",
     "d) nici un parametru nu este semnificativ statistic"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă pentru un model liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\beta_{3}X_{3} + \\epsilon$, parametrul $\\beta_{3}$este semnificativ statistic, în condițiile unui risc de 1%, atunci:",
    "optiuni": [
     "a) variabilele independente $X_{1}$și $X_{2}$explică în proporţie de 50% variația variabilei dependente",
     "b) variabila $X_{3}$are o influență parţială semnificativă asupra variabilei eroare",
     "c) modelul de regresie are cel puţin un factor care influențează semnificativ variabila dependentă",
     "d) parametrul $\\beta_{3}$nu diferă semnificativ statistic de 0"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Pentru un model liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\epsilon$, dacă parametrul $\\beta_{1}$este semnificativ statistic, atunci:",
    "optiuni": [
     "a) erorile sunt nule",
     "b) parametrul $\\beta_{2}$nu este semnificativ statistic",
     "c) modelul de regresie are cel puțin un factor care explică semnificativ variația variabilei dependente"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Econometrie",
    "intrebare": "Dacă pentru un model de regresie de forma: $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$ordonata la origine este semnificativă statistic, atunci:",
    "optiuni": [
     "a) media variabilei dependente este semnificativă chiar dacă variabila independentă ia valoarea zero",
     "b) dreapta trece prin origine"
    ],
    "raspuns_corect": ["a"]
   },

  // --- MARKETING (69 grile) ---
  {
    "materie": "Marketing",
    "intrebare": "Mixul de marketing este format, în mod clasic, din deciziile legate de:",
    "optiuni": ["a) Relații publice, management financiar, distribuție, recrutare", "b) Produs, preț, promovare, distribuție", "c) Cercetare, vânzare, administrare, planificare", "d) Producție, logistică, contabilitate, resurse umane"],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Setul evocat include:",
    "optiuni": [
     "a) Mărcile necunoscute",
     "b) Produsele din alte categorii",
     "c) Mărcile respinse din start",
     "d) Mărcile luate în considerare pentru cumpărare"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În piramida lui Maslow, nevoia de stimă se află:",
    "optiuni": [
     "a) După nevoile de apartenență și înaintea autorealizării",
     "b) La baza piramidei",
     "c) În afara ierarhiei",
     "d) Imediat deasupra nevoilor fiziologice"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Gradul scăzut de implicare a consumatorului se asociază cu:",
    "optiuni": [
     "a) Căutare extensivă de informații",
     "b) Evaluare complexă a alternativelor",
     "c) Rezolvarea de rutină a problemei",
     "d) Achiziții planificate strategic"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Ce este piața în accepțiunea administrării afacerilor?",
    "optiuni": [
     "a) sfera circulației mărfurilor; cererea și oferta de mărfuri",
     "b) totalitatea relațiilor care se stabilesc între vânzători și cumpărătorii unei categorii de produse",
     "c) locul în care se întâlnește cererea cu oferta",
     "d) un loc întins și deschis dintr-o localitate, unde se întâlnesc mai multe străzi",
     "e) un loc special amenajat unde se face comerț cu mărfuri",
     "f) un grup de cumpărători sau consumatori"
    ],
    "raspuns_corect": ["f"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Segmentarea pe stiluri de viață se bazează pe:",
    "optiuni": [
     "a) ideea că valorile culturale și modul de viață influențează semnificativ structura consumului și comportamentul de cumpărare",
     "b) predicția comportamentului de consum și cumpărare, în raport cu obiceiurile, atitudinile și opiniile diverselor grupuri",
     "c) diferențele între preferințele consumatorilor ca bază explicativă a diversității comportamentelor",
     "d) ipoteza că diferențele în profilul socio-demografic se află la originea diferențelor în stil de viață"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Alege afirmația corectă dintre cele de mai jos:",
    "optiuni": [
     "a) Piața critică este mai mare decât piața potențială.",
     "b) Piața critică este mai mică decât piața potențială.",
     "c) Piața critică este egală sau mai mare decât piața potențială.",
     "d) Piața critică este egală cu piața potențială."
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Dacă facem comparație între o piață pe care s-a distribuit un produs și un pahar în care s-a turnat un lichid, vom considera volumul paharului ca fiind analog cu potențialul pieței, iar volumul lichidului din pahar ca fiind analog cu volumul pieței pentru produsul de referință. În acest caz:",
    "optiuni": [
     "a) O piață este cu atât mai interesantă cu cât paharul este mai plin.",
     "b) O piață este cu atât mai interesantă cu cât paharul este mai gol.",
     "c) O piață este cu atât mai puțin interesantă cu cât paharul este mai gol."
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Un exemplu de grup de referință este:",
    "optiuni": [
     "a) Departamentul de marketing",
     "b) O campanie publicitară",
     "c) Companiile, în general",
     "d) Grupul de prieteni care influențează deciziile"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Nevoile umane sunt:",
    "optiuni": [
     "a) Dependente exclusiv de cultură",
     "b) Fixe și identice pentru toți oamenii",
     "c) Nelimitate ca număr, dar limitate ca intensitate",
     "d) Limitate ca număr și nelimitate ca intensitate"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Comportamentul de cumpărare se referă la:",
    "optiuni": [
     "a) Atitudinea consumatorului față de marcă",
     "b) Evaluarea satisfacției post-cumpărare",
     "c) Acțiunile și deciziile din momentul achiziției (evoluțiile prin care trece consumatorul când se decide să cumpere)",
     "d) Modul în care produsul este folosit ulterior"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "O nevoie evolutivă se dezvoltă:",
    "optiuni": [
     "a) Prin impuls emoțional",
     "b) În timp, pe măsură ce contextul se schimbă",
     "c) Instantaneu",
     "d) Numai sub influența reclamelor"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Ipoteza raționalității consumatorului din teoria economică s-a bazat pe următoarele premise:",
    "optiuni": [
     "a) Consecvența preferințelor, tranzitivitatea preferințelor și transparența pieței",
     "b) Consistența preferințelor, tranziția preferințelor și transparența pieței",
     "c) Consistența preferințelor, tranzitivitatea preferințelor și transparența pieței",
     "d) Consistența preferințelor, tranzitivitatea preferințelor și transplantul pieței"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Un exemplu de criteriu surogat de evaluare a brandurilor este:",
    "optiuni": [
     "a) Nevoia utilitară",
     "b) Țara de origine a produsului",
     "c) Satisfacția post-cumpărare",
     "d) Disponibilitatea pe piață"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Potențialul unei piețe:",
    "optiuni": [
     "a) este exprimat în unități bănești și ne spune cât anume ar putea fi valoarea totală a vânzărilor, dacă produsul ar avea un anumit nivel de preț, iar consumatorii ar avea un anumit nivel al veniturilor",
     "b) este exprimat în unități bănești și ne spune cât anume s-ar putea consuma sau utiliza anual, dacă produsul n-ar avea preț",
     "c) este exprimat în unități fizice și ne spune cât anume s-ar putea consuma sau utiliza anual",
     "d) este exprimat în unități fizice și ne spune cât anume ar putea fi valoarea totală a vânzărilor"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Setul inert cuprinde:",
    "optiuni": [
     "a) Alternativele finale",
     "b) Mărcile considerate superioare",
     "c) Mărcile necunoscute și uitate",
     "d) Produsele preferate ale consumatorului"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Comportamentul de consum implică:",
    "optiuni": [
     "a) Numai procesul de comparare a alternativelor",
     "b) Modul în care produsul este folosit, evaluat și eliminat ulterior",
     "c) Doar decizia de a cumpăra",
     "d) Numai influențele externe"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În cazul cumpărătorilor organizaționali, un criteriu de evaluare a ofertelor furnizorilor este:",
    "optiuni": [
     "a) vechimea pe piață a furnizorului",
     "b) reclama",
     "c) sprijinul moral oferit de furnizor",
     "d) performanțele anterioare ale furnizorului",
     "e) design"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Etapele segmentării pieței sunt:",
    "optiuni": [
     "a) (1) identificarea și descrierea variabilelor relevante; (2) decuparea pieței de referință în segmente omogene; (3) alegerea unuia sau mai multor segmente țintă; (4) poziționarea în cadrul segmentului țintă",
     "b) (1) alegerea unor segmente eterogene de clienți; (2) identificarea nevoilor acestora; (3) cercetarea pieței; (4) vânzarea",
     "c) (1) identificarea și descrierea variabilelor operaționale; (2) alegerea pieței țintă; (3) vânzarea produselor"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În marketing, ideea de afacere trebuie să pornească de la:",
    "optiuni": [
     "a) Intuiție personală",
     "b) Reguli legislative",
     "c) Preferințele antreprenorului",
     "d) Client și nevoile sale"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Cererea efectivă (solvabilă) reprezintă:",
    "optiuni": [
     "a) Dorințele/nevoile care pot fi susținute financiar (au acoperire bănească)",
     "b) Nevoile de bază ale societății",
     "c) Intențiile de cumpărare, indiferent de bani",
     "d) Totalitatea dorințelor consumatorilor"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Pentru un produs se cunosc: populația totală N = 100.000 persoane, consumatori = 40%, nonconsumatori relativi = 10%, cantitatea consumată anual = 400.000 mii buc. Întreprinderea are pe această piață 10.000 consumatori. Care dintre următoarele afirmații este adevărată?",
    "optiuni": [
     "a) Piața teoretică este de 50.000 persoane",
     "b) Nonconsumatorii absoluți sunt 50% din consumatori",
     "c) Cota de piață a firmei este 10,0%",
     "d) Intensitatea de consum este: 40 buc./persoană",
     "e) Cota de piață a concurenței este 25,0%"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Piața țintă este:",
    "optiuni": [
     "a) un grup eterogen de consumatori",
     "b) clienții fideli produselor și serviciilor firmei",
     "c) clienții cei mai mulțumiți ai firmei",
     "d) grupul de clienți (segmentul de piață) spre care se orientează producătorul sau distribuitorul"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În funcție de natura variabilelor folosite, segmentarea poate să fie de 4 tipuri:",
    "optiuni": [
     "a) (1) socio-demografică; (2) comportamentală și atitudinală; (3) pe stiluri de viață; (4) după avantajele căutate",
     "b) (1) economică; (2) relațională; (3) pe stiluri de viață; (4) după avantaje",
     "c) (1) socială; (2) democrată; (3) după venit; (4) după vârstă",
     "d) (1) socio-demografică; (2) comportamentală; (3) pe grupuri de referință; (4) după vârstă"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Consolidarea în procesul de învățare reprezintă:",
    "optiuni": [
     "a) Amintirea faptului că trebuie învățată o lecție",
     "b) Învățarea prin observarea altora",
     "c) Întărirea unui comportament prin recompensă",
     "d) Transferul unei reacții la un stimul nou"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "O nevoie hedonică se referă la:",
    "optiuni": [
     "a) Funcționalitate",
     "b) Plăcere, estetică, emoție",
     "c) Supraviețuire",
     "d) Securitate"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Care dintre următoarele afirmații cu privire la conceptele de bază ale marketingului este adevărată?",
    "optiuni": [
     "a) Nevoia pentru un produs (ex. nevoia de Coca Cola) este influențată de percepții.",
     "b) Între dorințe și nevoi diferența este doar de natură lingvistică.",
     "c) Pentru a se concretiza, schimbul necesită în mod obligatoriu negociere.",
     "d) Produsul reprezintă suma avantajelor tangibile căutate de consumator."
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Secretul marketingului constă în a oferi mult și a face să pară că ceri puțin este:",
    "optiuni": [
     "a) o încercare nereușită de slogan",
     "b) o expresie a degradării spiritului etic și moral al societății de consum",
     "c) o afirmație cel puțin discutabilă",
     "d) o afirmație corectă, un echivalent al expresiei „dau ca să dai\""
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Persoanele care ar putea avea nevoie de un produs, dar nu îl cumpără și nu îl consumă încă, formează:",
    "optiuni": [
     "a) nonconsumatorii absoluți",
     "b) nonconsumatorii finali",
     "c) nonconsumatorii relativi",
     "d) piața teoretică a produsului",
     "e) piața actuală a concurenței"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Piața teoretică:",
    "optiuni": [
     "a) reprezintă parte din piața produsului pe care producătorul vinde sub marcă proprie",
     "b) cuprinde consumatorii și nonconsumatorii absoluți",
     "c) este formată din indivizii cărora le este adresat produsul",
     "d) cuprinde consumatorii și nonconsumatorii relativi (se obține prin diminuarea populației totale cu nonconsumatorii absoluți: PT = N - NCA)"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Deciziile de cumpărare luate în magazin pot fi caracterizate prin:",
    "optiuni": [
     "a) rigurozitate",
     "b) calcularea consecințelor",
     "c) spontaneitate",
     "d) stabilitate",
     "e) disonanță post-cumpărare"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Piața critică reprezintă:",
    "optiuni": [
     "a) piața protejată",
     "b) piața de monopol",
     "c) dimensiunea minimă acceptabilă a pieței, dimensiune sub care supraviețuirea întreprinderii este în pericol",
     "d) piața pe care consumatorii se află sub protecția legilor",
     "e) obiectivul strategic cheie al politicilor de marketing"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Gradul de saturație a pieței:",
    "optiuni": [
     "a) se determină ca raport procentual între potențialul pieței și capacitatea pieței",
     "b) se determină ca raport procentual între volumul și capacitatea pieței",
     "c) este un indicator de inatractivitate a pieței",
     "d) indică mărimea potențialului pieței"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Influențele socio-culturale în procesul de cumpărare cuprind și:",
    "optiuni": [
     "a) acareturile",
     "b) experiența",
     "c) clasa socială",
     "d) pachetul bonus",
     "e) clasa politică"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Pe piața unui oraș concurează patru firme de panificație. Vânzările medii lunare sunt: PANIR = 35.000 t, GRANITUL = 20.000 t, CORINT = 32.000 t, IASINT = 13.000 t. (Total = 100.000 t). Care dintre următoarele informații este adevărată?",
    "optiuni": [
     "a) Cota absolută de piață a SC CORINT SA este 10,00%",
     "b) Cota relativă de piață a SC PANIR SA este 1,0",
     "c) Cota relativă de piață a SC GRANITUL SA este 0,625",
     "d) Cota absolută de piață a SC IASINT SA este 13,00%"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În etapa post-cumpărare, starea de disconfort psihic generată de opinia că și variantele respinse aveau caracteristicile dorite se numește:",
    "optiuni": [
     "a) rezolvarea extensivă a problemei (REP)",
     "b) disonanță post-cumpărare",
     "c) evitarea creării unor așteptări nerealiste",
     "d) rezolvarea limitată a problemei (RLP)"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Operația de identificare și decupare a diverselor grupuri tipice de clienți care acționează pe o piață poartă numele de:",
    "optiuni": [
     "a) piață critică a produsului",
     "b) segmentare comportamentală",
     "c) variabile de segmentare",
     "d) piață țintă",
     "e) segmentare a pieței"
    ],
    "raspuns_corect": ["e"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Influențele situaționale în procesul de cumpărare cuprind:",
    "optiuni": [
     "a) ambianța socială",
     "b) Eul public",
     "c) empatia",
     "d) nivelul educației",
     "e) vârsta"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Procesul decizional de cumpărare nu cuprinde următoarea etapă:",
    "optiuni": [
     "a) cumpărarea propriu-zisă",
     "b) evaluarea post-cumpărare",
     "c) conștientizarea existenței riscului perceput",
     "d) evaluarea alternativelor",
     "e) căutarea informațiilor"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Piața întreprinderii este formată din:",
    "optiuni": [
     "a) parte din piața produsului pe care producătorul sau distribuitorul de referință vinde în nume propriu, în interes propriu și sub marcă proprie",
     "b) întreaga populație de consumatori și utilizatori ai produselor de același gen",
     "c) toți nonconsumatorii absoluți și relativi",
     "d) produsele cele mai bune pe piață"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Întinderea unui centru de cumpărare este dată de numărul de:",
    "optiuni": [
     "a) euro",
     "b) metri liniari",
     "c) metri pătrați",
     "d) indivizi",
     "e) mijloace de transport"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Principiul accelerației susține că:",
    "optiuni": [
     "a) relațiile între cumpărător și furnizor tind să fie stabile pe termen lung",
     "b) o modificare mică în cererea de bunuri de consum provoacă o modificare amplificată/majoră în cererea de bunuri industriale/echipamente",
     "c) cumpărătorii organizaționali reacționează mai rapid decăt consumatorii finali",
     "d) prețul produselor industriale scade pe măsură ce volumul producției crește"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Din cele trei componente ale atitudinii amintim:",
    "optiuni": [
     "a) componenta cognitivă",
     "b) componenta ideală",
     "c) componenta socială",
     "d) componenta financiară"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Piața produsului de referință este dată de:",
    "optiuni": [
     "a) partea din piață pe care producătorul o vinde sub marca proprie",
     "b) întreaga populație de consumatori și utilizatori ai produsului de referință, indiferent de originea și marca acestuia",
     "c) toți nonconsumatorii absoluți și relativi ai produsului",
     "d) segmentul de piață cu cea mai mare cotă de piață"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Orientarea spre vânzări este aceea care:",
    "optiuni": [
     "a) pornește de la produsele existente și le forțează pe piață prin orice gen de politici promoționale (urmărind creșterea cantitativă a vânzărilor)",
     "b) pornește de la nevoile, dorințele și motivațiile consumatorului",
     "c) se concentrează pe satisfacerea pe termen lung a clienților",
     "d) elimină activitățile de promovare și publicitate"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Un televizor nou, introdus sub marca Samsung, are șanse mai mari să fie acceptat decât unul introdus sub un nume nou datorită:",
    "optiuni": [
     "a) principiului discriminării",
     "b) principiului generalizării",
     "c) disonanței post-cumpărare",
     "d) învățării prin observare"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Transparența, ca și condiție a schimbului, presupune ca:",
    "optiuni": [
     "a) părțile să poată comunica între ele și să aibă acces la informațiile pieței",
     "b) produsele să fie ambalate în ambalaje transparente",
     "c) tranzacțiile să se desfășoare exclusiv online",
     "d) prețurile să fie fixe și nenegociabile"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Extinderea orizontală a unui centru de cumpărare este dată de:",
    "optiuni": [
     "a) numărul de departamente / funcții implicate în procesul decizional",
     "b) numărul de niveluri ierarhice implicate",
     "c) volumul fizic al achizițiilor",
     "d) durata procesului de cumpărare"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Pentru a determina piața critică a întreprinderii, trebuie să cunoaștem:",
    "optiuni": [
     "a) pierderile inevitabile",
     "b) profitul net",
     "c) pragul de rentabilitate (sau volumul critic al vânzărilor)",
     "d) piața potențială maximă"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Ce tip de risc perceput este asociat cu teama de a fi judecat de alții?",
    "optiuni": [
     "a) Risc financiar",
     "b) Risc de performanță",
     "c) Risc social",
     "d) Risc tehnic"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Care dintre următoarele reprezintă un stimul obiectiv de marketing?",
    "optiuni": [
     "a) Ambalajul produsului și prețul afișat",
     "b) Opinia unui prieten apropiat",
     "c) O melodie care sugerează o stare de fericire",
     "d) Recomandarea unui influencer"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În achizițiile organizaționale, inițiatorul este:",
    "optiuni": [
     "a) persoana care identifică o problemă sau o nevoie ce poate fi rezolvată prin cumpărare",
     "b) managerul care aprobă bugetul",
     "c) secretara care filtrează apelurile",
     "d) inginerul care stabilește caietul de sarcini"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În achizițiile organizaționale, decidenții sunt:",
    "optiuni": [
     "a) muncitorii de la strung",
     "b) managerii de nivel superior și intermediar care aprobă sau resping cumpărarea",
     "c) furnizorii externi ai firmei",
     "d) consultanții tehnici"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În achizițiile organizaționale, filtrele (gatekeepers) sunt:",
    "optiuni": [
     "a) indivizii care direcționează și controlează fluxul de informații în centrul de cumpărare (ex. secretara)",
     "b) aparatele folosite în procesul de producție",
     "c) auditorii financiari externi",
     "d) producătorii concurenți"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "În achizițiile organizaționale, prescriptorii sunt:",
    "optiuni": [
     "a) persoanele a căror părere/expertiză deține un coeficient ridicat de importanță (ex. proiectantul, metrologul)",
     "b) agenții comerciali care livrează marfa",
     "c) clienții finali ai firmei",
     "d) acționarii principali"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Cumpărarea repetitivă pe piața organizațională are loc atunci când:",
    "optiuni": [
     "a) același produs este comandat în mod repetat de la același furnizor, pe baza experienței anterioare",
     "b) firma cumpără un echipament complet nou pentru prima dată",
     "c) se modifică prețul sau caracteristicile tehnice ale produsului",
     "d) furnizorul este schimbat la fiecare comandă"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Cumpărarea modificată pe piața organizațională apare atunci când:",
    "optiuni": [
     "a) se alterează rutina existentă (se modifică prețul, specificațiile tehnice sau furnizorul introducând un produs nou)",
     "b) se cumpără rechizite de birou de rutină",
     "c) firma nu are niciun fel de experiență anterioară",
     "d) tranzacția se anulează definitiv"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Cumpărarea nouă pe piața organizațională se caracterizează prin:",
    "optiuni": [
     "a) lipsa de experiență anterioară a firmei, grad ridicat de risc și căutare extensivă de informații",
     "b) decizie luată instantaneu de o singură persoană",
     "c) comenzi automate de rutină",
     "d) absența oricărei evaluări a alternativelor"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Rata de cumpărare reprezintă:",
    "optiuni": [
     "a) intervalul mediu dintre două cumpărări succesive (inversul frecvenței de cumpărare)",
     "b) numărul total de cumpărători dintr-un an",
     "c) procentul de discount acordat la cumpărare",
     "d) viteza cu care produsele sunt transportate"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Marketing",
    "intrebare": "Capacitatea pieței se exprimă în:",
    "optiuni": [
     "a) unități fizice (bucăți, tone, metri, kwh)",
     "b) unități bănești (lei, euro)",
     "c) procente de cotă de piață",
     "d) număr de puncte de vânzare"
    ],
    "raspuns_corect": ["a"]
   },

  // --- FINANȚE (Aproximativ 90 de grile - Capitolele 1, 2, 3 și Mixte) ---
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele corelații reflectă cerințele de echilibru financiar la nivelul unei întreprinderi din sectorul industrial (privat):",
    "optiuni": ["a) alocații bugetare + venituri proprii = cheltuieli", "b) venituri bugetare = cheltuieli bugetare + rezerve bugetare", "c) alocații bugetare + credite = cheltuieli + dobânzi", "d) venituri = costuri + profit"],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Procesele și relațiile economice în formă bănească ce au loc în sfera circulației produsului național:",
    "optiuni": [
     "a) presupun o modificare a mărimii valorice a patrimoniului administrat de participanții la aceste procese și relații, nu doar o schimbare a formei valorii",
     "b) nu sunt considerate financiare în nici una din accepțiunile date conceptului de finanțe și sferei sale de manifestare",
     "c) sunt considerate financiare numai în accepțiunea extinsă dată conceptului de finanțe și sferei sale de manifestare",
     "d) nu sunt considerate financiare în accepțiunea restrânsă dată conceptului de finanțe și sferei sale de manifestare"
    ],
    "raspuns_corect": ["c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Exprimarea în formă bănească a proceselor și relațiilor economico-sociale:",
    "optiuni": [
     "a) caracterizează finanțele doar în accepțiunea restrânsă",
     "b) caracterizează finanțele doar în accepțiunea extinsă",
     "c) se manifestă doar în sfera repartiției produsului intern brut",
     "d) presupune manifestarea funcției banilor de măsură a valorii"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Printre cerințele îndeplinirii rolului ce revine pârghiilor financiare, pot fi menționate:",
    "optiuni": [
     "a) pârghiile financiare să se angreneze organic în mecanismul de funcționare a economiei",
     "b) pârghiile financiare să se îmbine organic cu normele și normativele economico-financiare",
     "c) instrumentele financiare să contribuie la soluționarea unor probleme de ordin economic și social în condiții avantajoase",
     "d) instrumentele financiare să influențeze pozitiv anumite laturi ale activității economice în diverse faze ale reproducției sociale"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele afirmații sunt adevărate:",
    "optiuni": [
     "a) caracterul obiectiv al funcției de control rezidă în exercitarea controlului prin intermediul unor persoane, ce îndeplinesc atribuțiuni de control financiar",
     "b) controlul financiar intern preventiv este mai eficient decât controlul financiar intern postoperativ",
     "c) controlul financiar extern postoperativ este ineficient",
     "d) funcția de control are o sferă mai restrânsă de manifestare decât funcția de repartiție"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele corelații reflectă cerințele de echilibru financiar la nivelul unei întreprinderi publice (de stat):",
    "optiuni": [
     "a) venituri excepționale = costuri + profit",
     "b) venituri + subvenții = costuri + profit",
     "c) venituri - profit = costuri",
     "d) venituri = costuri"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Redistribuirea de resurse financiare între persoanele fizice și juridice este expresia manifestării finanțelor în funcția de:",
    "optiuni": [
     "a) alocare (a resurselor)",
     "b) distribuire (a resurselor)",
     "c) control asupra activităților economico-sociale",
     "d) repartiție a PIB"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Diferențierile între relațiile financiare publice specifice bugetului de stat și cele specifice bugetelor locale constau în:",
    "optiuni": [
     "a) forma de proprietate în care se administrează patrimoniile respective",
     "b) numărul componentelor principale pe care le înglobează fiecare",
     "c) existența contraprestației directe",
     "d) tipul de interese (obiective) ce se satisfac prin relațiile financiare respective"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele categorii de procese și relații economice sunt considerate financiare, atât în accepțiunea extinsă, cât și în cea restrânsă dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "a) procesele și relațiile economice realizate în formă bănească ce presupun un transfer de valoare și de putere de cumpărare între participanți",
     "b) toate procesele și relațiile economice la care participă entitățile publice",
     "c) procesele și relațiile economice prin care se constituie, distribuie și se utilizează fondurile bănești pentru funcționarea diferitelor entități",
     "d) toate procesele și relațiile economice ce presupun un transfer de valoare între participanți"
    ],
    "raspuns_corect": ["c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Fondurile proprii ale întreprinderilor cu capital de stat destinate activității de producție sunt:",
    "optiuni": [
     "a) fonduri financiare de consum",
     "b) fonduri financiare de nivel micro-economic",
     "c) fonduri financiare de nivel mediu-economic",
     "d) fonduri financiare de înlocuire sau dezvoltare"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele componente ale sferei finanțelor este specifică subsistemului financiar privat:",
    "optiuni": [
     "a) finanțele gospodăriilor (menajelor)",
     "b) asigurările de bunuri, persoane și răspundere civilă",
     "c) asigurările sociale",
     "d) creditul"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Contractarea și primirea unui credit de la o bancă pentru achiziționarea de către o întreprindere a unui utilaj din import concretizează:",
    "optiuni": [
     "a) un flux financiar de contrapartidă",
     "b) un flux financiar autonom",
     "c) un flux financiar decalaj",
     "d) un flux financiar multiplu"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Îndeplinirea funcției banilor de măsură a valorii presupune:",
    "optiuni": [
     "a) mijlocirea de către aceștia a acumulării și păstrării valorii lor la dispoziția deținătorilor sub formă de sume de bani",
     "b) realizarea unor procese și relații de alocare-utilizare a unor sume de bani, de vehiculare a valorii în formă bănească prin operațiuni de încasări și plăți",
     "c) folosirea acestora în realizarea transferului de valoare între participanți la diferitele tranzacții",
     "d) utilizarea lor pentru evaluarea și dimensionarea valorică a diferitelor bunuri și servicii"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele instrumente de conducere și reglare a activității financiare conține indicatori cu niveluri obligatorii de respectat:",
    "optiuni": [
     "a) bugetul de stat (al administrației centrale)",
     "b) bugetul economiei naționale",
     "c) bugetul funcțional",
     "d) planul de conturi"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Creditul, în ipostaza de componentă a finanțelor:",
    "optiuni": [
     "a) presupune participarea unor intermediari financiari",
     "b) apare ca relație financiară doar în sfera finanțelor private",
     "c) se desfășoară pe principiul cedării definitive a sumelor de bani, dacă activitatea este neprofitabilă",
     "d) are caracter de rambursabilitate în cazul manifestării unui eveniment viitor incert, dar posibil"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Funcția finanțelor de repartiție a produsului intern brut:",
    "optiuni": [
     "a) se definește ca fiind capacitatea finanțelor de a mijloci repartiția în formă bănească a produsului intern brut",
     "b) generează fluxuri de constituire și distribuire a fondurilor bănești la diferite nivele de derulare a activităților economico-sociale",
     "c) are un caracter obiectiv imprimat de modalitățile concrete de constituire și distribuire a fondurilor bănești",
     "d) are o sferă de manifestare mai extinsă decât funcția de control"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Intervenția reglatoare a autorităților publice prin instrumente financiare în perioadele de supraîncălzire a economiei se poate face prin:",
    "optiuni": [
     "a) diminuarea cheltuielilor publice, concomitent cu majorarea impozitelor sau introducerea de noi impozite",
     "b) majorarea cheltuielilor publice și diminuarea impozitelor și taxelor",
     "c) întocmirea și executarea de bugete excedentare",
     "d) diminuarea cheltuielilor publice, concomitent cu diminuarea impozitelor sau renunțarea la unele impozite pentru a menține bugetul de stat în echilibru"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Fondurile asigurărilor sociale de stat se încadrează în categoria:",
    "optiuni": [
     "a) fondurilor (financiare) centralizate",
     "b) fondurilor (financiare) descentralizate",
     "c) fondurilor (financiare) publice de rezervă",
     "d) fondurilor (financiare) de înlocuire și dezvoltare"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele categorii de procese și relații economice nu sunt considerate financiare în accepțiunea extinsă dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "a) procesele și relațiile economice în formă bănească din sfera repartiției produsului creat",
     "b) procesele și relațiile economice în formă natural-materială fără transfer de valoare",
     "c) procesele și relațiile economice în formă bănească din sferele circulației și consumului produsului intern brut",
     "d) procesele și relațiile economice în formă natural-materială cu transfer de valoare"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Intervenția reglatoare prin instrumente financiare a autorităților publice pentru contracararea ciclicității în economie se poate realiza prin:",
    "optiuni": [
     "a) majorarea cheltuielilor publice în faza de recesiune și reducerea lor în faza de expansiune",
     "b) majorarea impozitelor în faza de recesiune și diminuarea acestora în faza de expansiune",
     "c) întocmirea și executarea de bugete echilibrate în fiecare an din durata ciclului economic",
     "d) întocmirea și executarea de bugete excedentare în faza de recesiune a economiei"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Bugetul funcțional (folosit în sfera finanțelor publice):",
    "optiuni": [
     "a) reflectă resursele și cheltuielile publice pe termen mediu",
     "b) se mai numește și buget de mijloace",
     "c) se întocmește pentru o perioadă de 1 an bugetar",
     "d) are caracter imperativ"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele instrumente de conducere și reglare a activităților financiare conține indicatori ce vizează o perioadă mai îndelungată (termen mediu și lung):",
    "optiuni": [
     "a) bugetul economiei naționale",
     "b) bugetul program",
     "c) bugetul funcțional",
     "d) bugetul de mijloace"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Expresia \"economie de îndatorare\":",
    "optiuni": [
     "a) semnifică faptul că în economia unei țări satisfacerea nevoilor de finanțare se procură îndeosebi prin participarea intermediarilor financiari, bancari și nebancari",
     "b) semnifică faptul că economia unei țări este îndatorată peste posibilitățile sale financiare",
     "c) semnifică faptul că în economia unei țări, sursele de finanțare se procură, preponderent, de pe piața de capital",
     "d) semnifică faptul că în economia unei țări resursele de finanțare se procură în cea mai mare măsură prin emiterea și tranzacționarea titlurilor de valoare (acțiuni, obligațiuni)"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Controlul concomitent, ca una din formele sub care se manifestă controlul financiar, se particularizează prin faptul că:",
    "optiuni": [
     "a) permite corectarea operativă a operațiunilor ce se abat de la cerințele de legalitate, eficiență și oportunitate",
     "b) este cea mai eficientă formă de control financiar",
     "c) permite evitarea inițierii unor operațiuni ineficiente și evitarea pierderilor aferente lor",
     "d) urmărește stabilirea rezultatelor efective comparativ cu cele preconizate, abaterile înregistrate, cauzele lor, măsurile ce se vor aplica pentru îmbunătățirea activității viitoare"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "În balanța financiară a statului, la venituri curente se includ:",
    "optiuni": [
     "a) impozitele directe și indirecte",
     "b) amortizmentele",
     "c) dobânzile plătite aferente datoriei publice",
     "d) transferuri de capital primite"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Latura subiectivă a îndeplinirii de către finanțe a funcției de control asupra activităților economice și sociale decurge din:",
    "optiuni": [
     "a) manifestarea finanțelor ca procese și relații economice în formă bănească",
     "b) exercitarea atribuțiilor de control de către persoane cu atribuții specifice în domeniu",
     "c) îndeplinirea de către finanțe a funcției de repartiție a PIB",
     "d) îndeplinirea de către bani a functiilor specifice"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele formulări corespund accepțiunii restrânse dată conceptului de finanțe:",
    "optiuni": [
     "a) finanțele înglobează ansamblul proceselor și relațiilor economice în formă bănească cu transfer de valoare pentru satisfacerea nevoilor cu caracter public",
     "b) finanțele înglobează ansamblul proceselor și relațiilor prin care se constituie și distribuie fonduri bănești pentru satisfacerea diferitelor necesități",
     "c) finanțele înglobează ansamblul proceselor și relațiilor de repartiție atât în formă bănească, cât și în formă natural-materială a produsului creat",
     "d) finanțele înglobează ansamblul proceselor și relațiilor economice în formă bănească"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "Transferul de valoare specific finanțelor publice:",
    "optiuni": [
     "a) include printre participanți și persoane fizice sau juridice private",
     "b) are loc, de regulă, cu titlu definitiv",
     "c) vizează satisfacerea unor nevoi cu caracter colectiv",
     "d) se realizează, în principiu, fără o contraprestație directă și imediată din partea beneficiarului sumei de bani transferate"
    ],
    "raspuns_corect": ["b", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. Între premisele directe care au stat la baza apariției finanțelor pot fi menționate:",
    "optiuni": [
     "A. Îndeplinirea de către bani a funcției de mijloc de prezervare / stocare a valorii",
     "B. Îndeplinirea de către bani a funcției de măsură a valorii",
     "C. Îndeplinirea de către bani a funcției de mijloc de schimb",
     "D. Apariția instituțiilor de tip statal (a statului)"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Care din următoarele formulări corespund accepțiunii restrânse dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "A. Finanțele înglobează ansamblul proceselor și relațiilor economice în formă bănească",
     "B. Finanțele înglobează ansamblul proceselor și relațiilor economice prin care se constituie și distribuie fonduri bănești pentru satisfacerea diferitelor necesități",
     "C. Finanțele înglobează ansamblul proceselor și relațiilor economice în formă bănească din sferele producției și repartiției produsului național",
     "D. Finanțele înglobează ansamblul proceselor și relațiilor economice de repartiție în formă bănească a produsului creat"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Care din următoarele formulări corespund accepțiunii extinse dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "A. Finanțele înglobează ansamblul proceselor și relațiilor economice legate de procurarea, distribuirea, utilizarea și reconstituirea continuă a tuturor resurselor bănești necesare desfășurării activității în care sunt implicate autoritățile publice",
     "B. Finanțele înglobează ansamblul proceselor și relațiilor economice ce au loc între participanții la procesul reproducției economice și sociale",
     "C. Finanțele înglobează ansamblul proceselor și relațiilor economice ce vizează constituirea, distribuirea sau utilizarea fondurilor bănești pentru funcționarea diferitelor entități, inclusiv a entităților publice",
     "D. Finanțele înglobează ansamblul proceselor și relațiilor economice ce au loc între participanții la repartiția produsului intern brut"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "4. Printre primele forme concrete de procurare a resurselor financiare la dispoziția statului pot fi menționate:",
    "optiuni": [
     "A. Dările în natură și prestațiile în muncă pentru funcționarea armatei",
     "B. Impozitele în bani",
     "C. Cheltuielile cu plata soldelor militarilor",
     "D. Tributurile în bani încasate de la popoarele învinse"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. Primele forme concrete de procurare a resurselor financiare necesare funcționării statului au fost:",
    "optiuni": [
     "A. Dările în natură și prestațiile în muncă pentru funcționarea armatei",
     "B. Impozitele în bani",
     "C. Trofee și jafuri de război",
     "D. Împrumuturile în bani"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. Primele forme concrete de utilizare a resurselor financiare aparținând statului au fost:",
    "optiuni": [
     "A. Cheltuielile cu plata soldelor militarilor",
     "B. Cheltuielile cu plata funcționarilor publici",
     "C. Subvenționarea agenților economici",
     "D. Investițiile publice în infrastructură"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Perioada liberală s-a caracterizat prin aceea că:",
    "optiuni": [
     "A. Statul nu lăsa să acționeze libera concurență și mecanismele pieței",
     "B. Intervenția statului asupra activității economice nu limita libertatea de acțiune a forțelor pieței",
     "C. În această perioadă, finanțele sunt considerate un veritabil mijloc de intervenție în economie",
     "D. Statul trebuia să stea departe de activitatea economică"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. În perioada intervenționistă:",
    "optiuni": [
     "A. Finanțele sunt considerate un veritabil mijloc de intervenție în economie",
     "B. Viața economică era dominată de ideea de superioritate a inițiativei private",
     "C. Finanțele publice au fost utilizate pentru asigurarea echilibrului economic și social al țării",
     "D. Predomină ideea neutralității finanțelor publice"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. Care dintre următoarele categorii de procese și relații economice sunt considerate financiare în ambele accepțiuni (restrânsă și extinsă):",
    "optiuni": [
     "A. Procesele și relațiile economice care implică un transfer, definitiv sau rambursabil, de putere de cumpărare între participanți",
     "B. Procesele și relațiile economice care se derulează între participanții la repartiția PIB în formă bănească",
     "C. Vânzarea-cumpărarea mărfurilor pe bani",
     "D. Toate procesele și relațiile economice realizate în formă natural-materială"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "10. Procesele și relațiile economice în formă bănească ce au loc în sfera circulației produsului național (vânzarea-cumpărarea mărfurilor pe bani):",
    "optiuni": [
     "A. Sunt considerate financiare numai în accepțiunea extinsă dată conceptului de finanțe",
     "B. Nu presupun o modificare a mărimii valorice a patrimoniului administrat, ci doar o schimbare a formei valorii",
     "C. Sunt financiare în accepțiunea restrânsă",
     "D. Presupun un transfer definitiv de valoare fără contraprestație"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "11. Existenta finanțelor, a relațiilor financiare este legată de:",
    "optiuni": [
     "A. Apariția bunurilor și a unor structuri statale",
     "B. Apariția statului și a unei mărfuri cu rol de echivalent universal",
     "C. Existența relațiilor marfă-bani-marfă fără legătură cu statul",
     "D. Existența statului, a folosirii banilor și a formelor valorice în repartizarea produsului intern brut"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "12. Care dintre următoarele afirmații referitoare la relațiile financiare sunt adevărate:",
    "optiuni": [
     "A. Presupun un transfer de valoare ce are ca scop satisfacerea unor nevoi generale ale societății",
     "B. Presupun un transfer de valoare cu caracter exclusiv rambursabil",
     "C. Reprezintă relații sociale de natură economică exprimate în formă bănească",
     "D. Exprimă o transformare a formelor valorii din forma bani în forma marfă și invers"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "13. În procesul mobilizării resurselor la fondurile financiare publice, finanțele îmbracă următoarele forme concrete:",
    "optiuni": [
     "A. Dobânzi aferente creditelor bancare nerambursabile",
     "B. Redevențe și chirii din concesiuni și închirieri de terenuri și alte bunuri ale statului",
     "C. Penalități pentru nerespectarea obligațiilor contractuale între persoane fizice",
     "D. Impozite, taxe și contribuții pentru asigurările sociale"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "14. Ca trăsături ale bunurilor (utilităților) publice se disting:",
    "optiuni": [
     "A. Caracterul neconcurențial (și indivizibil) al accesului la consumul acestora",
     "B. Caracterul colectiv al consumului acestora",
     "C. Accesul exclusiv pe bază de preț al pieței",
     "D. Caracterul divizibil și privat"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. Funcția finanțelor de repartiție a Produsului Intern Brut (PIB):",
    "optiuni": [
     "A. Se definește ca fiind capacitatea finanțelor de a mijloci repartiția în formă bănească a unei părți din PIB",
     "B. Are o sferă de manifestare mai extinsă decât funcția de control",
     "C. Are un caracter subiectiv imprimat de modalitățile concrete de constituire și distribuire a fondurilor bănești",
     "D. Generează fluxuri de constituire și distribuire a fondurilor bănești la diferite niveluri de derulare a activităților economico-sociale"
    ],
    "raspuns_corect": ["a", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Constituirea fondurilor publice se realizează prin intermediul funcției de repartiție a finanțelor în:",
    "optiuni": [
     "A. Procesul distribuirii PIB între persoane juridice și stat",
     "B. Procesul distribuirii și redistribuirii PIB între persoane juridice și fizice, pe de o parte, și stat, pe de altă parte",
     "C. Procesul redistribuirii PIB între întreprinzători privați și persoane juridice",
     "D. Procesul distribuirii PIB exclusiv în sfera producției materiale"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Mijlocirea de către finanțele publice a satisfacerii unor nevoi sociale prin oferta de utilități publice exprimă conținutul funcției de:",
    "optiuni": [
     "A. Distribuire",
     "B. Reglare",
     "C. Alocare",
     "D. Stabilizare"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "4. Mijlocirea de către finanțele publice a unor procese de redistribuire a resurselor între persoanele fizice și juridice pentru înfăptuirea unor criterii de echitate socială exprimă conținutul funcției de:",
    "optiuni": [
     "A. Distribuire",
     "B. Alocare",
     "C. Stabilizare",
     "D. Control"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. Care din următoarele afirmații referitoare la funcția de control sunt adevărate:",
    "optiuni": [
     "A. Funcția de control are o sferă de manifestare mai cuprinzătoare decât funcția de repartiție",
     "B. Necesitatea constituirii și distribuirii de fonduri financiare conferă funcției de repartiție un caracter subiectiv",
     "C. Modalitățile tehnice de constituire și distribuire a fondurilor conferă funcției de repartiție un caracter obiectiv",
     "D. În faza circulației produsului național controlul financiar vizează viteza cu care mărfurile circulă"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. Caracterul obiectiv al funcției de control rezidă în:",
    "optiuni": [
     "A. Existența finanțelor ca procese și relații economice în formă bănească",
     "B. Metodele și tehnicile de control folosite",
     "C. Operațiunile ce se supun controlului",
     "D. Exercitarea controlului de către persoane din afara entității controlate"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Intervenția reglatoare prin instrumente financiare a autorităților publice în faza de supraîncălzire a economiei presupune:",
    "optiuni": [
     "A. Majorarea impozitelor (directe și/sau indirecte)",
     "B. Diminuarea cheltuielilor publice de consum și/sau de investiții",
     "C. Întocmirea de bugete extraordinare",
     "D. Acceptarea deficitului bugetar și finanțarea lui din resurse extraordinare"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. Intervenția reglatoare prin instrumente financiare a autorităților publice în faza de recesiune a economiei se poate realiza prin:",
    "optiuni": [
     "A. Diminuarea impozitelor (directe și/sau indirecte)",
     "B. Majorarea cheltuielilor publice de consum și/sau investiții",
     "C. Acceptarea deficitului bugetar și finanțarea acestuia din resurse extraordinare",
     "D. Majorarea impozitelor pe consum"
    ],
    "raspuns_corect": ["a", "b", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. Rolul finanțelor în dezvoltarea societății, ca expresie directă a îndeplinirii funcției de control, se concretizează în:",
    "optiuni": [
     "A. Atenuarea oscilațiilor ciclice ale economiei",
     "B. Îmbunătățirea modului de administrare a resurselor",
     "C. Redistribuirea resurselor între unități administrativ-teritoriale",
     "D. Redistribuirea resurselor între diferitele persoane fizice și juridice"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. Care din următoarele afirmații cu privire la mecanismul financiar sunt adevărate:",
    "optiuni": [
     "A. Poate fi definit ca un mod de organizare și conducere a fluxurilor bănești-financiare",
     "B. Funcționează independent de mecanismul economic global",
     "C. Poate fi conceput, la nivel global, ca un ansamblu de mecanisme individuale corespunzătoare diferitelor tipuri de fonduri bănești",
     "D. Poate fi definit, la nivel global, ca un ansamblu al proceselor și instrumentelor de conducere și reglare a fluxurilor bănești"
    ],
    "raspuns_corect": ["a", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Încasarea integrală a contravalorii bunurilor livrate sau serviciilor prestate la un moment ulterior livrării/prestării concretizează un flux financiar:",
    "optiuni": [
     "A. Multiplu",
     "B. Decalat",
     "C. Autonom",
     "D. De contrapartidă"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Fondurile bănești ce se constituie și se administrează la dispoziția anumitor entități și care sunt destinate finanțării unor nevoi imprevizibile se încadrează în categoria:",
    "optiuni": [
     "A. Fondurilor (financiare) de înlocuire și dezvoltare",
     "B. Fondurilor (financiare) de rezervă",
     "C. Fondurilor (financiare) de consum",
     "D. Fondurilor (financiare) de asigurare"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "4. Fondurile asigurărilor sociale de stat se încadrează în categoria:",
    "optiuni": [
     "A. Fondurilor (financiare) de înlocuire și dezvoltare",
     "B. Fondurilor (financiare) descentralizate",
     "C. Fondurilor (financiare) publice constituite în ipostaza de autoritate publică",
     "D. Fondurilor (financiare) centralizate"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. În care din următoarele situații se reflectă ipostaza de pârghie financiară a cheltuielilor publice:",
    "optiuni": [
     "A. Diminuarea cheltuielilor publice în faza de boom a economiei, pentru a atenua ritmul prea ridicat de creștere economică",
     "B. Acordarea de ajutoare bănești tuturor membrilor societății",
     "C. Subvenționarea produselor sau activităților de o deosebită importanță pentru consumul populației sau pentru economia națională",
     "D. Majorarea cheltuielilor publice în faza de recesiune a economiei, pentru a stimula relansarea economiei"
    ],
    "raspuns_corect": ["a", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. În care din următoarele situații se reflectă ipostaza de pârghie financiară a impozitelor:",
    "optiuni": [
     "A. Reducerea impozitului pentru partea din profit destinată reinvestirii",
     "B. Restituirea taxelor vamale de import aferente materiilor prime incorporate în producția destinată exportului",
     "C. Reducerea cotelor de impozitare sau renunțarea la practicarea unor impozite în fazele de recesiune ale economiei",
     "D. Instituirea de accize (taxe speciale de consumație) pentru produsele din alcool"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Care din următoarele instrumente de conducere și reglare a activităților financiare include indicatori ce vizează o perioadă de timp mai îndelungată (termen mediu și lung):",
    "optiuni": [
     "A. Bugetul de stat",
     "B. Bugetul program",
     "C. Balanța financiară a economiei naționale",
     "D. Bugetul economiei naționale"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. În care din următoarele instrumente financiare de conducere și reglare sunt reflectate resursele financiare totale, publice și private ale țării:",
    "optiuni": [
     "A. Balanța financiară a economiei naționale",
     "B. Bugetul economic (al economiei naționale)",
     "C. Bugetul program",
     "D. Balanța de plăți externe"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. Bugetele (publice) funcționale:",
    "optiuni": [
     "A. Se întocmesc, de regulă, pentru o perioadă de un an (bugetar)",
     "B. Cuprind toate cheltuielile legate de realizarea unor obiective pe termen mediu și lung",
     "C. Sunt similare cu bugetele instituțiilor publice",
     "D. Se mai numesc și bugete de obiective"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "10. În balanța financiară a statului, la venituri curente se regăsesc:",
    "optiuni": [
     "A. Impozitele directe și indirecte",
     "B. Veniturile provenite de la întreprinderile și proprietățile statului",
     "C. Împrumuturile de stat pe termen lung",
     "D. Emisiunea monetară extraordinară"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. Între premisele directe care au stat la baza apariției finanțelor pot fi menționate:",
    "optiuni": [
     "F) îndeplinirea de către bani a funcției de măsură a valorii",
     "G) îndeplinirea de către bani a funcției de mijloc de schimb",
     "H) apariția instituțiilor de tip statal (statului)",
     "I) apariția banilor (obiectelor-bani)"
    ],
    "raspuns_corect": ["f", "g", "h", "i"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Primele forme concrete de utilizare a resurselor financiare aparținând statului au fost:",
    "optiuni": [
     "A) dările in natura si prestațiile in munca pentru funcționarea armatei",
     "B) impozitele in bani",
     "C) cheltuielile cu plata soldelor militarilor",
     "D) cheltuielile cu plata funcționarilor publici",
     "E) tributurile încasate in bani"
    ],
    "raspuns_corect": ["a", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Care dintre urmatoarele afirmatii sunt adevarate:",
    "optiuni": [
     "A) banul-semn reprezinta o creanta asupra economiei unei tari sau a mai multora",
     "B) spre deosebire de banul-marfa, banul-semn nu are valoare intrinseca",
     "C) monedele divizionare folosite in prezent nu se includ in categoria banului-semn",
     "D) intrucat monedele din metal pretios aveau insemne specifice (ce le diferentiau de altele), au fost incadrate in categoria banului-semn"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "4. Spre deosebire de acceptiunea extinsa a finantelor, in conceptul de finante in sens restrans sunt incluse numai procesele si relatiile economice care:",
    "optiuni": [
     "A) se realizeaza in forma baneasca",
     "B) se realizeaza in forma natural-materiala",
     "C) implica un transfer, definitiv sau rambursabil, de putere de cumparare intre participanti",
     "D) se deruleaza intre participantii la repartitia PIB in forma baneasca"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. Care din urmatoarele formulari corespunde acceptiunii extinse data conceptului de finante si sferei sale de cuprindere:",
    "optiuni": [
     "A) finanțele înglobează ansamblul proceselor si relatiilor economice legate de procurarea, distribuirea, utilizarea si reconstituirea continua a tuturor resurselor banesti necesare desfasurarii diferitelor activitati in care sunt implicate autoritatile publice",
     "B) finanțele înglobează ansamblul proceselor si relatiilor economice ce au loc intre participantii la procesul reproductiei economice si sociale",
     "C) finanțele înglobează ansamblul proceselor si relatiilor economice ce vizeaza constituirea, distribuirea sau utilizarea fondurilor banesti pentru functionarea diferitelor entitati, inclusiv a entitatilor publice",
     "D) finanțele înglobează ansamblul proceselor si relatiilor economice ce au loc intre participantii la repartitia produsului intern brut",
     "E) finanțele înglobează ansamblul proceselor si relatiilor economice ÎN FORMĂ BĂNEASCĂ ce au loc intre participantii la procesul reproductiei economice si sociale",
     "F) finanțele înglobează ansamblul proceselor si relatiilor economice legate de procurarea, distribuirea, utilizarea si reconstituirea continua a tuturor resurselor banesti necesare desfasurarii diferitelor activitati"
    ],
    "raspuns_corect": ["c", "e"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. În sfera finantelor locale:",
    "optiuni": [
     "A) transferul de valoare se realizeaza in forma natural-materială",
     "B) transferul de valoare vizeaza satisfacerea unor nevoi de interes local",
     "C) nu este posibila contractarea de imprumuturi",
     "D) dimensiunile proceselor si relatiilor financiare sunt influentate de tipul de organizare statala"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Care din urmatoarele afirmatii cu privire la transferul de valoare ce are loc intre participantii la procesele si relatiile financiare sunt adevarate:",
    "optiuni": [
     "A) fiind realizat in forma baneasca, reprezinta, implicit, un transfer de putere de cumparare",
     "B) in sfera finantelor private se realizeaza intotdeauna cu caracter definitiv",
     "C) in sfera finantelor publice vizeaza doar scopuri sau nevoi cu caracter public national",
     "D) in sfera creditului se realizeaza cu caracter definitiv"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. Care din urmatoarele afirmatii cu privire la componentele principale ale sferei finantelor sunt adevarate:",
    "optiuni": [
     "A) bugetul de stat si bugetele locale desemneaza categorii financiare ce desemneaza procese/relatii financiare desfasurate pe principiul transferului de valoare definitiv si fara contraprestatie",
     "B) asigurarile exprima relatii financiare ce imbina caracteristici ale bugetelor publice si creditului",
     "C) transferul de valoare caracteristic relatiilor de credit se particularizează prin prezenta intermediarilor financiari",
     "D) resursele banesti vehiculate prin relatiile aferente creditului se administreaza atat de entitatile si institutiile specializate private, cat si de catre stat si alte autoritati publice"
    ],
    "raspuns_corect": ["a", "b", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. In care din urmatoarele categorii si procese de relatii economice din sfera de cuprindere a finantelor transferul de valoare intre participanti poate fi reversibil:",
    "optiuni": [
     "A) asigurarile de bunuri, persoane si raspundere civila",
     "B) bugetele publice",
     "C) credit",
     "D) asigurarile sociale"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. Care din următoarele afirmații sunt adevărate:",
    "optiuni": [
     "a) funcția de control are o sfera de manifestare mai cuprinzătoare decât funcția de repartiție",
     "b) necesitatea constituirii si distribuirii de fonduri financiare conferă funcției de repartiție un caracter subiectiv",
     "c) modalitățile tehnice de constituire si distribuire a fondurilor conferă funcției de repartiție un caracter obiectiv",
     "d) activitatea financiară ce concretizează funcția de repartiție ofera suportul obiectiv necesar exercitarii controlului financiar"
    ],
    "raspuns_corect": ["c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Caracterul obiectiv al funcției de control rezidă în:",
    "optiuni": [
     "a) existența finanțelor ca procese și relații economice în formă bănească",
     "b) metodele și tehnicile de control folosite",
     "c) operațiunile ce se supun controlului",
     "d) exercitarea controlului de către persoane din afara entității controlate"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Care din urmatoarele forme de control financiar au ca obiectiv și verificarea legalitatii operatiunilor financiare:",
    "optiuni": [
     "a) controlul financiar intern preventiv",
     "b) controlul financiar intern postoperativ",
     "c) controlul financiar extern concomitent",
     "d) controlul financiar intern concomitent",
     "e) controlul financiar extern postoperativ"
    ],
    "raspuns_corect": ["a", "b", "e"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "4. Mijlocirea de către finanțele publice a satisfacerii unor nevoi sociale prin oferta de utilități publice, creată pe seama resurselor financiare ale autorităților publice, exprimă, în opinia economiștilor Richard Musgrave și Peggy Musgrave, conținutul funcției de:",
    "optiuni": [
     "a) distribuire",
     "b) reglare",
     "c) alocare",
     "d) stabilizare"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. Intervenția reglatoare prin instrumente financiare a autorităților publice în faza de supraîncălzire a economiei se poate realiza prin:",
    "optiuni": [
     "a) majorarea impozitelor (directe și/sau indirecte)",
     "b) diminuarea cheltuielilor publice de consum și/sau de investiții",
     "c) întocmirea de bugete extraordinare",
     "d) acceptarea deficitului bugetar si finanțarea acestuia din resurse extraordinare",
     "e) întocmirea de bugete ciclice"
    ],
    "raspuns_corect": ["a", "b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. Rolul finanțelor în dezvoltarea societății, ca expresie directă a îndeplinirii de către finanțe a funcției de control asupra activităților economico sociale, se concretizează în:",
    "optiuni": [
     "a) atenuarea oscilațiilor ciclice ale economiei",
     "b) îmbunătățirea modului de administrare a resurselor",
     "c) redistribuirea resurselor între unități administrativ-teritoriale",
     "d) redistribuirea resurselor între diferitele persoane fizice și juridice"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Verificarea eficientei si oportunitatii operatiunilor financiare la nivelul unei entitati private reprezinta un obiectiv specific:",
    "optiuni": [
     "a) controlului financiar intern concomitent",
     "b) controlului financiar extern al statului postoperativ",
     "c) controlului financiar extern al statului preventiv",
     "d) controlului financiar intern preventiv"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. Care dintre urmatoarele afirmatii concretizeaza rezultatele obtenabile pe seama indeplinirii de catre finante a functiei de repartitie a PIB in forma baneasca:",
    "optiuni": [
     "a) atenuarea oscilatiilor ciclice ale economiei",
     "b) imbunatatirea modului de administrare a resurselor",
     "c) redistribuirea resurselor intre unitati administrativ-teritoriale",
     "d) redistribuirea resurselor intre diferite persoane fizice si juridice"
    ],
    "raspuns_corect": ["c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. In care din urmatoarele directii se manifesta rolul finantelor in economie si societate:",
    "optiuni": [
     "a) redistribuirea resurselor intre ramuri si subramuri ale economiei",
     "b) redistribuirea resurselor intre unitati administrativ-teritoriale",
     "c) redistribuirea resurselor intre membrii societatii",
     "d) sustinerea unor anumite politici demografice"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "10. Interventia reglatoare, in faza de supraincalzire a economiei (boom), a autoritatilor publice prin instrumente financiare se face prin:",
    "optiuni": [
     "a) majorarea cheltuielilor publice de consum si de investitii si reducerea taxelor si impozitelor",
     "b) diminuarea cheltuielilor publice de consum si de investitii si majorarea taxelor si impozitelor",
     "c) majorarea impozitelor directe si diminuarea impozitelor indirecte",
     "d) acordarea diferitelor facilitati fiscale"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. Fondurile asigurărilor sociale de stat se încadrează în categoria:",
    "optiuni": [
     "a) fondurilor (financiare) de înlocuire și dezvoltare",
     "b) fondurilor (financiare) descentralizate",
     "c) fondurilor (financiare) publice constituite în ipostaza de autoritate publică",
     "d) fondurilor (financiare) centralizate"
    ],
    "raspuns_corect": ["d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Incasarea integrala a contravalorii bunurilor livrate, serviciilor prestate sau lucrarilor executate la un moment ulterior livrarii bunurilor, prestarii serviciilor sau executarii lucrarilor concretizeaza un flux financiar:",
    "optiuni": [
     "a) multiplu",
     "b) decalat",
     "c) autonom",
     "d) de contrapartidă"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Fondurile banesti ce se constituie si se administreaza la dispozitia anumitor entitati si care sunt destinate finantarii unor nevoi imprevizibile se incadreaza in categoria:",
    "optiuni": [
     "a) fondurilor (financiare) de inlocuire si dezvoltare",
     "b) fondurilor (financiare) de rezerva",
     "c) fondurilor (financiare) de consum",
     "d) fondurilor (financiare) de asigurare"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "4. Fondurile financiare de nivel mediu-economic cuprind:",
    "optiuni": [
     "a) fondurile bugetare ale judetelor",
     "b) fondurile bugetare ale municipiilor",
     "c) fondurile bugetare ale comunelor",
     "d) fondurile ministerelor"
    ],
    "raspuns_corect": ["a", "b", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. Dupa nivelul la care se constituie, fondurile de resurse financiare se grupeaza in:",
    "optiuni": [
     "a) fonduri la nivel macroeconomic",
     "b) fonduri la nivel mediu-economic",
     "c) fonduri la nivel microeconomic",
     "d) fonduri la nivel global",
     "e) fonduri de consum"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. Bugetele (publice) funcționale:",
    "optiuni": [
     "a) se intocmesc, de regula, pentru o perioada de un an (bugetar)",
     "b) cuprind toate cheltuielile legate de realizarea unor obiective pe termen mediu si lung",
     "c) sunt similare cu bugetele institutiilor publice",
     "d) se mai numesc si bugete de obiective"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Care din urmatoarele instrumente de conducere si reglare a activitatilor financiare include indicatori ce vizeaza o perioada de timp mai indelungata (termen mediu si lung):",
    "optiuni": [
     "a) bugetul de stat",
     "b) bugetul program",
     "c) balanta financiara a economiei nationale",
     "d) bugetul economiei nationale"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. Spre deosebire de finantarea economiei pe pietele de capital, finantarea prin indatorare:",
    "optiuni": [
     "a) presupune finantarea directa a agentilor economici deficitari de catre agentii excedentari",
     "b) atribuie un rol sporit autoritatilor publice",
     "c) creste riscurile aparitiei inflatiei",
     "d) are la baza creditul bancar"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. Finanțarea pe piața de capital:",
    "optiuni": [
     "a) presupune emisiunea de titluri financiare, în special acțiuni și obligațiuni",
     "b) se realizează prin intermediul unei burse de valori, ca expresie a pieței primare",
     "c) crește riscurile apariției inflației",
     "d) investitorii, prin procurarea de acțiuni de la societățile ce se finanțează pe piața de capital, sunt îndreptățiți la o parte din profitul net al companiei"
    ],
    "raspuns_corect": ["a", "b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "1. În care din următoarele categorii de procese și relații economice din sfera de cuprindere a finanțelor transferul de valoare și de putere de cumpărare nu presupune, întotdeauna, o modificare a mărimii valorice a patrimoniului:",
    "optiuni": [
     "A. Asigurări de bunuri, persoane și răspundere civilă",
     "B. Bugete publice",
     "C. Credit",
     "D. Asigurări sociale",
     "E. Finanțele întreprinderilor (firmelor)"
    ],
    "raspuns_corect": ["e"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "2. Care din următoarele categorii de procese și relații economice sunt considerate financiare în ambele accepțiuni date conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "A. Procesele și relațiile economice care se realizează în formă bănească",
     "B. Procesele și relațiile economice care se realizează în formă natural-materială",
     "C. Procesele și relațiile economice care implică un transfer, definitiv sau rambursabil, de putere de cumpărare între participanți",
     "D. Procesele și relațiile economice care se derulează între participanții la repartiția PIB în formă bănească"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "3. Printre criteriile de raționalitate ce trebuie urmărite în satisfacerea nevoilor de utilități totale se regăsesc:",
    "optiuni": [
     "A. Maximizarea ofertei totale de utilități la o mărime dată a resurselor ce pot fi consumate",
     "B. Maximizarea produsului intern brut",
     "C. Acoperirea prin ofertă privată a acelor nevoi care, prin natura lor, pot fi satisfăcute mai avantajos în varianta publică",
     "D. Maximizarea utilității totale"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "5. În care din următoarele categorii de procese și relații economice din sfera de cuprindere a finanțelor transferul de valoare și de putere de cumpărare poate fi reversibil:",
    "optiuni": [
     "A. Asigurări de bunuri, persoane și răspundere civilă",
     "B. Bugete publice",
     "C. Credit",
     "D. Asigurări sociale",
     "E. Finanțele întreprinderilor (firmelor)"
    ],
    "raspuns_corect": ["a"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "6. Procesele și relațiile economice în formă bănească ce au loc în sfera circulației produsului național:",
    "optiuni": [
     "A. Sunt considerate financiare numai în accepțiunea extinsă dată conceptului de finanțe și sferei sale de manifestare",
     "B. Sunt considerate financiare în accepțiunea restrânsă dată conceptului de finanțe și sferei sale de manifestare",
     "C. Nu presupun o modificare a mărimii valorice a patrimoniului administrat de participanții la aceste procese și relații, ci doar o schimbare a formei valorii",
     "D. Nu sunt considerate financiare în nici una din accepțiunile date conceptului de finanțe și sferei sale de manifestare"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "7. Ca trăsături ale bunurilor (utilităților) publice se disting:",
    "optiuni": [
     "A. Caracterul neconcurențial al accesului la consumul acestora",
     "B. Eficiența mai ridicată în producerea/consumul acestora, comparativ cu utilitățile private",
     "C. Caracterul colectiv al consumului acestora",
     "D. Imposibilitatea individualizării consumului ca proces real"
    ],
    "raspuns_corect": ["a", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "8. Transferul de valoare ce caracterizează finanțele în accepțiune restrânsă:",
    "optiuni": [
     "A. Are loc cu titlu definitiv, fie pe principiul rambursabilității",
     "B. În sfera finanțelor publice se realizează, de regulă, fără contraprestație directă și imediată",
     "C. Reprezintă, implicit, un transfer de putere de cumpărare între participanți la procesele și relațiile financiare",
     "D. În sfera finanțelor private nu implică întotdeauna o modificare a mărimii valorice a patrimoniului, ci doar o dirijare internă a valorii"
    ],
    "raspuns_corect": ["b", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "9. Forma bănească de exprimare a proceselor și relațiilor economice:",
    "optiuni": [
     "A. Reprezintă trăsătura definitorie a finanțelor",
     "B. Caracterizează finanțele în accepțiune extinsă"
    ],
    "raspuns_corect": ["b"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "10. Care din următoarele afirmații sunt adevărate:",
    "optiuni": [
     "A. În accepțiune extinsă, finanțele înglobează ansamblul proceselor și relațiilor economice ce au loc între participanții la procesul reproducției economice și sociale",
     "B. Procesele și relațiile economice în formă bănească ce se derulează în sfera repartiției produsului intern brut sunt considerate financiare în accepțiunea restrânsă dată conceptului de finanțe și sferei sale de cuprindere",
     "C. Procesele și relațiile economice în formă bănească care presupun schimburi de echivalente nu sunt considerate financiare în accepțiunea restrânsă dată conceptului de finanțe și sferei sale de cuprindere",
     "D. În accepțiune extinsă conceptul de finanțe se definește prin ansamblul proceselor și relațiilor economice în formă bănească ce vizează constituirea, distribuirea, utilizarea și reconstituirea continuă a fondurilor bănești la care participă autoritățile publice"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "11. Care din următoarele categorii de procese și relații economice sunt considerate financiare, atât în accepțiunea extinsă, cât și în cea restrânsă dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "A. Toate procesele și relațiile economice de repartiție a produsului intern brut",
     "B. Procesele și relațiile economice realizate în formă bănească ce presupun un transfer de valoare și de putere de cumpărare între participanți",
     "C. Toate procesele și relațiile economice la care participă entitățile publice",
     "D. Procesele și relațiile economice prin care se constituie, distribuie și se utilizează fondurile bănești pentru funcționarea diferitelor entități economico-sociale"
    ],
    "raspuns_corect": ["b", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "12. Care din următoarele categorii de procese și relații economice nu sunt considerate financiare, în nici una din cele două accepțiuni date conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "A. Procesele și relațiile economice ce nu se realizează în formă bănească",
     "B. Procesele și relațiile economice realizate în formă natural-materială",
     "C. Procesele și relațiile economice realizate în formă naturală ce nu implică o modificare a mărimii valorice a patrimoniului administrat de participanții la aceste procese și relații",
     "D. Procesele și relațiile economice realizate în formă natural-materială ce au loc între participanții la repartiția produsului intern brut"
    ],
    "raspuns_corect": ["a", "b", "c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "13. Primele forme concrete de utilizare a resurselor financiare apartinând statului au fost:",
    "optiuni": [
     "A. Dările în natură și prestațiile în muncă pentru funcționarea armatei",
     "B. Impozitele în bani",
     "C. Cheltuielile cu plata soldelor militarilor",
     "D. Cheltuielile cu plata funcționarilor publici",
     "E. Tributurile în bani"
    ],
    "raspuns_corect": ["a", "c", "d"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "14. Spre deosebire de accepțiunea extinsă a finanțelor, în conceptul de finanțe în sens restrâns sunt incluse numai procesele și relațiile economice care:",
    "optiuni": [
     "A. Se realizează în formă bănească",
     "B. Se realizează în formă natural-materială",
     "C. Implică un transfer, definitiv sau rambursabil, de putere de cumpărare între participanți",
     "D. Se derulează între participanții la repartiția PIB în formă bănească"
    ],
    "raspuns_corect": ["c"]
   },
   {
    "materie": "Finanțe",
    "intrebare": "15. Care din următoarele categorii de procese și relații economice sunt considerate financiare numai în accepțiunea extinsă dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
     "A. Procesele și relațiile economice care se realizează în formă bănească și care implică un transfer de valoare între participanți",
     "B. Vânzarea-cumpărarea mărfurilor pe bani",
     "C. Procesele și relațiile economice în formă bănească ce au loc între participanții la repartiția produsului intern brut",
     "D. Toate procesele și relațiile economice în formă bănească ce au loc între participanții la producția, circulația și consumul produsului intern brut"
    ],
    "raspuns_corect": ["b", "c", "d"]
   }
];

/* ============================================================
   LOGICA APLICAȚIEI (Selecție multiplă + Confirmare)
   ============================================================ */

const $ = (id) => document.getElementById(id);

const el = {
  menu: $('screen-menu'),
  quiz: $('screen-quiz'),
  subject: $('quiz-subject'),
  current: $('quiz-current'),
  total: $('quiz-total'),
  round: $('quiz-round'),
  progress: $('quiz-progress'),
  progressBar: $('quiz-progress').parentElement,
  question: $('quiz-question'),
  options: $('quiz-options'),
  next: $('btn-next'),
  back: $('btn-back'),
};

const state = {
  subject: null,
  pool: [],
  queue: [],
  index: 0,
  round: 1,
  answered: false,
  selected: [], // Stochează variantele bifate de utilizator
};

// Clase Tailwind pentru starea butoanelor de variantă
const OPTION_BASE = 'option-btn flex w-full items-start gap-4 rounded-2xl border-2 px-4 py-4 text-left transition-colors';
const OPTION_IDLE = 'border-line bg-white';
const OPTION_OK = 'border-green-600 bg-green-100';
const OPTION_BAD = 'border-red-600 bg-red-100';
const BADGE_BASE = 'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-lg font-bold';
const BADGE_IDLE = 'bg-paper';
const BADGE_OK = 'bg-green-600 text-white';
const BADGE_BAD = 'bg-red-600 text-white';

/* ---------- Utilitare ---------- */

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Extrage litera și textul din optiuni de genul "c) modelul econometric"
function parseOption(raw, i) {
  const m = raw.match(/^\s*([a-hA-H])\)\s*([\s\S]*)$/);
  return m
    ? { letter: m[1].toLowerCase(), text: m[2] }
    : { letter: String.fromCharCode(97 + i), text: raw };
}

function renderMath() {
  if (typeof window.renderMathInElement === 'function') {
    const cfg = { delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false };
    window.renderMathInElement(el.question, cfg);
    window.renderMathInElement(el.options, cfg);
  }
}

/* ---------- Navigare între ecrane ---------- */

function showScreen(name) {
  const isQuiz = name === 'quiz';
  el.menu.classList.toggle('hidden', isQuiz);
  el.quiz.classList.toggle('hidden', !isQuiz);
  el.quiz.classList.toggle('flex', isQuiz);
  window.scrollTo(0, 0);
}

/* ---------- Pornirea testului ---------- */

function startQuiz(subject) {
  const pool = INTREBARI.filter((q) => q.materie === subject);
  if (pool.length === 0) {
    alert('Nu există întrebări pentru materia „' + subject + '".');
    return;
  }
  state.subject = subject;
  state.pool = pool;
  state.queue = pool.slice(); // Prima rundă (ne-amestecat)
  state.index = 0;
  state.round = 1;
  el.subject.textContent = subject;
  showScreen('quiz');
  renderQuestion();
}

/* ---------- Afișarea unei întrebări ---------- */

function renderQuestion() {
  const q = state.queue[state.index];
  const total = state.queue.length;
  state.answered = false;
  state.selected = [];

  el.current.textContent = state.index + 1;
  el.total.textContent = total;
  el.round.textContent = state.round;
  setProgress(state.index, total);

  el.question.textContent = q.intrebare;
  el.options.innerHTML = '';

  const correct = q.raspuns_corect.map((l) => l.toLowerCase());
  const isMultiple = correct.length > 1;

  q.optiuni.forEach((raw, i) => {
    const opt = parseOption(raw, i);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.letter = opt.letter;
    btn.className = OPTION_BASE + ' ' + OPTION_IDLE;

    const badge = document.createElement('span');
    badge.className = BADGE_BASE + ' ' + BADGE_IDLE;
    badge.textContent = opt.letter.toUpperCase();

    const label = document.createElement('span');
    label.className = 'pt-1 text-base';
    label.textContent = opt.text;

    btn.append(badge, label);
    
    // Logica de click (Selecție Multiplă sau Simplă)
    btn.addEventListener('click', () => {
      if (state.answered) return;
      
      if (isMultiple) {
        // Toggle la selecție
        const idx = state.selected.indexOf(opt.letter);
        if (idx > -1) {
          state.selected.splice(idx, 1);
          btn.classList.remove('border-blue-600', 'bg-blue-50');
          btn.classList.add('border-line', 'bg-white');
        } else {
          state.selected.push(opt.letter);
          btn.classList.remove('border-line', 'bg-white');
          btn.classList.add('border-blue-600', 'bg-blue-50'); // Culoare de selecție înainte de confirmare
        }
        // Activează butonul "Confirmă" dacă ai măcar o variantă bifată
        el.next.disabled = state.selected.length === 0;
      } else {
        // Răspuns unic (confirmare automată)
        state.selected = [opt.letter];
        onConfirmAnswer(correct);
      }
    });

    el.options.appendChild(btn);
  });

  // Setare buton principal ("Următorul")
  if (isMultiple) {
    el.next.disabled = true;
    el.next.textContent = 'Confirmă răspunsul';
  } else {
    el.next.disabled = true;
    el.next.textContent = 'Următoarea întrebare';
  }

  renderMath();
  window.scrollTo(0, 0);
}

/* ---------- Confirmarea răspunsului ---------- */

function onConfirmAnswer(correct) {
  if (state.answered) return;
  state.answered = true;

  const buttons = Array.from(el.options.querySelectorAll('.option-btn'));

  buttons.forEach((b) => {
    b.disabled = true;
    b.classList.add('cursor-default');
    const letter = b.dataset.letter;
    
    const isPicked = state.selected.includes(letter);
    const isCorrect = correct.includes(letter);

    // Marchează vizual variantele
    if (isCorrect) {
      markOption(b, true); // Variantele corecte se fac VERZI indiferent dacă au fost bifate sau nu
    } else if (isPicked && !isCorrect) {
      markOption(b, false); // Ai bifat o variantă greșită -> ROȘU
    } else {
       // Elimină stilurile de selecție albastre de la variantele nebifate
       b.classList.remove('border-blue-600', 'bg-blue-50');
    }
  });

  setProgress(state.index + 1, state.queue.length);
  el.next.disabled = false;
  el.next.textContent = isLastQuestion() ? 'Rundă nouă (amestecat)' : 'Următoarea întrebare';
  el.next.focus({ preventScroll: true });
}

function isLastQuestion() {
  return state.index === state.queue.length - 1;
}

function setProgress(done, total) {
  const pct = Math.round((done / total) * 100);
  el.progress.style.width = pct + '%';
  el.progressBar.setAttribute('aria-valuenow', String(pct));
}

function markOption(btn, ok) {
  btn.classList.remove('border-line', 'bg-white', 'border-blue-600', 'bg-blue-50');
  btn.classList.add(...(ok ? OPTION_OK : OPTION_BAD).split(' '));
  const badge = btn.firstElementChild;
  badge.classList.remove('bg-paper');
  badge.classList.add(...(ok ? BADGE_OK : BADGE_BAD).split(' '));
  badge.textContent = ok ? '✓' : '✕';
}

/* ---------- Următoarea întrebare ---------- */

function nextQuestion() {
  const q = state.queue[state.index];
  const correct = q.raspuns_corect.map((l) => l.toLowerCase());
  const isMultiple = correct.length > 1;

  // Dacă e întrebare cu răspuns multiplu și NU am confirmat încă -> Confirmăm.
  if (isMultiple && !state.answered) {
    onConfirmAnswer(correct);
    return;
  }

  if (!state.answered) return;

  if (!isLastQuestion()) {
    state.index++;
  } else {
    // Rundă terminată
    const lastShown = state.queue[state.queue.length - 1];
    let reshuffled = shuffle(state.pool);
    if (reshuffled.length > 1 && reshuffled[0] === lastShown) {
      const swap = 1 + Math.floor(Math.random() * (reshuffled.length - 1));
      [reshuffled[0], reshuffled[swap]] = [reshuffled[swap], reshuffled[0]];
    }
    state.queue = reshuffled;
    state.index = 0;
    state.round++;
  }
  renderQuestion();
}

/* ---------- Meniul ---------- */

function fillCounts() {
  document.querySelectorAll('.subject-btn').forEach((btn) => {
    const n = INTREBARI.filter((q) => q.materie === btn.dataset.subject).length;
    const target = btn.querySelector('.count');
    if (target) target.textContent = n + (n === 1 ? ' întrebare' : ' întrebări');
  });
}

/* ---------- Evenimente ---------- */

document.querySelectorAll('.subject-btn').forEach((btn) => {
  btn.addEventListener('click', () => startQuiz(btn.dataset.subject));
});
el.next.addEventListener('click', nextQuestion);
el.back.addEventListener('click', () => showScreen('menu'));

document.addEventListener('keydown', (e) => {
  if (el.quiz.classList.contains('hidden')) return;
  const key = e.key.toLowerCase();
  
  if ((key === 'enter' || key === 'arrowright') && state.answered) {
    e.preventDefault();
    nextQuestion();
  } else if ((key === 'enter' || key === 'arrowright') && !state.answered && state.queue[state.index].raspuns_corect.length > 1 && state.selected.length > 0) {
     // Enter apasă "Confirmă" pentru răspuns multiplu
     e.preventDefault();
     nextQuestion();
  } else if (/^[a-i]$/.test(key) && !state.answered) {
    const btn = el.options.querySelector('[data-letter="' + key + '"]');
    if (btn) btn.click();
  }
});

fillCounts();