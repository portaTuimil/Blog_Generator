Sobre una introducción a la termodinámica y sus leyes:///A 22 de diciembre de 2025///

<p>La termodinámica es la parte de la física dedicada al estudio, a nivel macroscópico, de los intercambios de energía entre los diversos sistemas y su entorno. Esta rama, fundamentada en el siglo XIX a raíz del desarrollo de las máquinas térmicas, busca describir los procesos que conllevan intercambios de energía, esto es, aquellos procesos que involucran calor o trabajo.</p>
<p>A la hora de afrontar el estudio de esta materia es importante separarla y distinguirla de la mecánica estadística. Mientras que esta última nace a finales de siglo de la mano de Boltzmann, Maxwell y Gibbs y se centra en el estudio del comportamiento de las partículas a nivel microscópico, la termodinámica se desarrolla unas décadas antes fundamentándose, en un inicio, sin necesidad de emplear explicaciones atómicas, es decir, tratando a los sistemas como un todo macroscópico y sin preocuparse por su constitución interna. De esta manera Carnot (1796-1832), uno de los padres de la termodinámica, publicó en 1824 su conocida obra <i>Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance</i> <i>(Reflexiones sobre la potencia motriz del fuego y sobre las máquinas propias para desarrollar esta potencia)</i> sin conocer la estructura microscópica de la materia como hoy la conocemos e, incluso, tratando al calor como un fluido.</p>

<p>Para comenzar a comprender esta materia es necesario conocer una serie de conceptos que serán útiles más adelante. </p>
<h3>Conceptos básicos:</h3>
<p>Gran parte del estudio de la termodinámica involucra el estudio de gases y líquidos. Los gases como el oxígeno o el nitrógeno, así como los gases nobles, tienen comportamientos aproximables mediante la ecuación de los gases ideales :</p>
<div class="flex-wrapper"><p>$$pV = mR_{s}T;$$ </p><p>$$ R\left[ \frac{m^3*Pa}{kg*K} \right];$$</p><p>$$R_{s}=\frac{8,314}{M_{molar}};$$</p></div>
<small><b>Ecuación 1.</b> Ecuación de los gases ideales (nótese que en termodinámica se acostumbra usar masa en vez de moles, por lo que la constante de los gases ideales se divide entre la masa del gas).</small>
<p>Esta ecuación asume que los átomos del gas no tienen volumen y que no existen fuerzas intermoleculares entre ellos. Estas suposiciones hacen que para algunas sustancias la ecuación carezca de validez o solo se corresponda con la realidad a temperaturas altas y presiones bajas. Para muchas de estas sustancias, como por ejemplo para el agua (que es una sustancia pura, a saber, que su composición química no varía con la temperatura), existen tablas donde partiendo de datos conocidos se pueden sacar otros que han sido hallados experimentalmente.</p>
<div class="table-wrapper">
    <table>
        <caption><b>Tabla 1.</b>Tabla de Saturación del Agua.</caption>
        <thead>
            <tr>
                <th>Temperatura (°C)</th>
                <th>Presión de saturación (kPa)</th>
                <th>Volumen específico líquido (m³/kg)</th>
                <th>Volumen específico vapor (m³/kg)</th>
                <th>Entalpía líquido (kJ/kg)</th>
                <th>Entalpía vapor (kJ/kg)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>0.611</td>
                <td>0.001000</td>
                <td>206.0</td>
                <td>0.0</td>
                <td>2501.0</td>
            </tr>
            <tr>
                <td>20</td>
                <td>2.339</td>
                <td>0.001001</td>
                <td>12.06</td>
                <td>84.0</td>
                <td>2524.0</td>
            </tr>
            <tr>
                <td>50</td>
                <td>12.35</td>
                <td>0.001012</td>
                <td>12.67</td>
                <td>209.0</td>
                <td>2575.0</td>
            </tr>
            <tr>
                <td>100</td>
                <td>101.3</td>
                <td>0.001043</td>
                <td>1.672</td>
                <td>419.0</td>
                <td>2676.0</td>
            </tr>
            <tr>
                <td>120</td>
                <td>198.5</td>
                <td>0.001060</td>
                <td>0.890</td>
                <td>504.0</td>
                <td>2738.0</td>
            </tr>
            <tr>
                <td>150</td>
                <td>476.2</td>
                <td>0.001090</td>
                <td>0.392</td>
                <td>632.0</td>
                <td>2833.0</td>
            </tr>
        </tbody>
    </table>
</div>
<small>Nótese que al hablar de sustancia puras se habla de líquidos subenfriados para referirse a líquidos y vapor sobrecalentado para referirse a su estado gaseoso por debajo del punto crítico. Esta tabla es válida en el cambio de fase (bajo la campana de saturación) por lo que conociendo un único valor de su estado se pueden conocer todos los demás como se discutirá más adelante (el estado de una mezcla bifásica queda definido por una única magnitud).</small>
<p>En termodinámica se distinguen dos tipos de unidades, las extensivas y las intensivas. Las magnitudes extensivas son aquellas de que dependen del tamaño o la cantidad de materia que hay en el sistema y son tales como la masa, el volumen, la energía interna o la entalpía (entre otras). Las intensivas, por otra parte, no dependen de nada de eso y son algunas como la presión, la temperatura o la densidad. Para convertir magnitudes extensivas en intensivas, y de esta manera poder trabajar de una manera escalable y más general, se las divide por la masa, convirtiéndose así en unidades "específicas". Mediante este procedimiento se llega a magnitudes como el volumen específico (el inverso de la densidad) o la energía interna específica (entre otros), que pueden ser halladas para casos particulares en las tablas anteriormente mencionadas.</p>

<p>Una magnitud intensiva muy interesante a nivel termodinámico es el calor específico, que se define como la cantidad de energía que hay que añadir a cierta cantidad de una sustancia para incrementar su temperatura en un grado centígrado. En el caso de líquidos y sólidos (al ser sustancias con un comportamiento próximo al incompresible) este valor tiende a converger a un valor concreto (por ejemplo 1 caloría en el caso del agua, que equivale a 4,18J), pero en gases este valor depende de si se realiza este incremento de temperatura a volumen constante o a presión constante, definiéndose así $C_{p}$ y $C_{V}$.</p>

<p>Visto todo lo anterior, el siguiente paso en el abordaje de la materia es el estudio de los cuatro postulados, conocidos como las leyes de la termodinámica, que constituyen la base de la teoría. Al tener carácter de postulado estos principios no se derivan de otros principios más generales dentro del propio marco teórico, sino que surgen de la generalización de la experiencia y deben ser aceptadas como válidas en su de aplicación.</p>

<h3>Sobre la ley cero de la termodinámica:</h3>
<p>La ley cero dice lo siguiente:</p>
<blockquote>Si un cuerpo A está en equilibrio térmico con un cuerpo B, y el cuerpo B está a su vez en equilibrio con un cuerpo C, entonces A y C están en equilibrio.</blockquote>
<p>Esta afirmación, aunque pueda parecer obvia, al no ser deductible de ningún otro sitio debe ser postulada y es necesaria para poder constituir a esta rama de la física como un sistema cerrado en sí mismo.</p>
<h3>Sobre la primera ley de la termodinámica:</h3>
<p>A la primera ley se la conoce como la ley de la conservación de la energía y dice lo siguiente:</p><blockquote>En un proceso termodinámico que involucra un sistema cerrado, el incremento en la energía interna es igual a la diferencia entre el calor acumulado por el sistema y el trabajo realizado por él.</blockquote>
<p>Que puesto como ecuación sería: </p>
$$\Delta U = Q-W$$
<small><b>Ecuación 2.</b> Ecuación de la primera ley de la termodinámica.</small>
<p>Es decir, la variación de energía interna ($U$) de un sistema (la variación de lo que podríamos considerar su energía potencial microscópica), es la energía transmitida en forma de intercambio de calor menos la trasmitida en forma de trabajo. Para entender esta ley tal como está formulada en este caso es imprescindible comprender el criterio de signos que se ha tomado. Con fines mnemotécnicos se podría decir que en termodinámica se toma un enfoque utilitario del convenio, como una máquina térmica busca convertir calor en trabajo, entonces se toma con signo positivo recibir calor y producir trabajo (nótese que aunque el signo sea positivo al producir trabajo, el sistema estaría perdiendo energía, de ahí el signo negativo en la ecuación de arriba).</p>

<div class="table-wrapper">
    <table>
        <caption><b>Tabla 2.</b> Sobre el convenio de signos en termodinámica.</caption>
        <thead>
            <tr>
                <th>Positivo (cuando el sistema se comporta como máquina térmica)</th>
                <th>Negativo (cuando el sistema se comporta como máquina frigorífica)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Recibir calor &lt;-- </td>
                <td>Producir calor --&gt; </td>
            </tr>
            <tr>
                <td>Producir trabajo --&gt; </td>
                <td>Recibir trabajo &lt;-- </td>
            </tr>
        </tbody>
    </table>
</div>

<p>La energía interna es una de las magnitudes más útiles a la hora de resolver problemas relacionados con sistemas cerrados. Desde lo que podríamos considerar el punto de vista de la mecánica estadística, la energía interna se podría describir como la suma de energía cinética de las partículas y  la energía almacenada en sus enlaces y fuerzas intermoleculares. En termodinámica, tratando al sistema como un conjunto, es simplemente una magnitud tabulada que en un estado particular, cierta presión y temperatura, es siempre igual. </p>

<p>Las magnitudes como la energía interna, todas aquellas que no dependen más que del estado en que se encuentra el gas, se conocen como funciones de estado. Estas pueden depender de uno o varios factores pero, dados estos factores estarán siempre definidas en el mismo valor. Las funciones que no son funciones de estado se conocen a veces como "funciones de camino" y son algunas como el calor o el trabajo, que dependen de la trayectoria del sistema. La energía interna se define así:</p>
<div class="flex-wrapper"><p>$$dU = C_{V}(T)*dT;$$</p> <p>$$ \text{ Asumiendo calores específicos constantes => }$$</p> <p>$$ \Delta U=C_{V}*(T_{2}-T_{1})$$</p></div>
<small><b>Ecuación 3.</b> Ecuación que describe la energía interna. Nótese que el calor a volumen constante depende de la temperatura por lo que el segundo resultado solo es verdadero aproximándolo a valor constante (que es se suele emplear al trabajar con gases ideales).</small>

<p>Como se puede observar, en consecuencia, para los gases ideales la energía interna es una función de estado que depende solo de la temperatura. Para el resto de gases la energía interna se pude encontrar en las tablas por lo que conociendo, en general, otras dos propiedades del gas, esta se puede deducir. </p>
<h3>Sobre la segunda ley:</h3>
<p>La segunda ley surgió en un inicio del estudio de las máquinas térmicas, por lo que recibió múltiples formulaciones antes de concretarse en las empleadas hoy en día, véase el enunciado de Kelvin-Plank:</p>
<blockquote>Es imposible construir una máquina térmica que, operando en un ciclo, convierta íntegramente el calor absorbido de un único foco térmico en trabajo.</blockquote>
<p>O su equivalente, el enunciado de Clausius:</p>
<blockquote>Es imposible que un proceso tenga como único resultado la transferencia de calor desde un cuerpo frío a otro caliente.</blockquote>
<p>Aunque las formulaciones modernas pasan por el uso de un nuevo concepto, el de entropía:</p>
<blockquote>En cualquier proceso real, la entropía total del universo aumenta; en los procesos reversibles permanece constante.</blockquote>
<small>Formulaciones de la segunda ley de la entropía, nótese que las tres proposiciones son equivalentes.</small></p>
<p>Para llegar a comprender este principio es imprescindible comprender lo que la entropía es. La variación de entropía se define de la siguiente manera:</p>
$$\Delta S = \frac{\partial Q}{T}$$
<p>Y, aunque a la hora de estudiar la termodinámica no es imprescindible comprender esta magnitud a nivel microscópico, a continuación se realizará una breve explicación. Al tirar un dado, caer en una cara particular es equiprobable a caer en otra. Ahora bien, al tirar dos dados, aunque sea equiprobable que en cada dado caiga en un número u otro, no es equiprobable que la suma de los dos dados de cualquier número. Por poner un ejemplo, solo habría una manera de sumar un dos, que sería con dos unos; sin embargo, sería posible sumar siete de varias maneras:  uno más seis, dos más cinco y tres más cuatro. De esta manera, el macroestado dos tiene una entropía baja, porque se puede configurar de pocas maneras, sin embargo la entropía del siete es alta, porque tiene numerosas posibilidades de configuración. De esta manera, por puro azar, tirando varias veces los dados el sistema tenderá a evolucionar hacia el siete y no hacia el dos por haber más microestados que dan lugar a ese macroestado. Esto último es lo que pasa en los sistemas termodinámicos.</p>
<p>De esta manera, la segunda ley de la termodinámica puede interpretarse como una ley de carácter probabilístico: los sistemas tienden espontáneamente a evolucionar hacia los estados de mayor entropía, ya que estos corresponden a los estados más probables desde el punto de vista microscópico. Aunque, en principio, pueden existir fluctuaciones que contradigan esta tendencia, en sistemas macroscópicos dichas fluctuaciones son extremadamente improbables y no se observan en la práctica.</p>

<p>Carnot demostró, mediante el teorema que lleva su nombre, que la eficiencia de una máquina térmica está directamente relacionada con la entropía que se genera durante su funcionamiento. En particular, una máquina térmica alcanza su máxima eficiencia únicamente cuando opera de manera reversible, es decir, cuando no genera entropía; cualquier generación de entropía implica una disminución inevitable del rendimiento. La máquina reversible que opera entre dos focos térmicos se conoce como la máquina de Carnot y tiene la siguiente eficiencia:</p>
<div class="flex-wrapper"><p>$$\eta_{Carnot} = 1-\frac{T_{L}}{T_{H}};$$ </p><p>$$\text{Que por ser reversible es igual equivale a decir} =>$$</p><p>$$ \eta_{Carnot}=1-\frac{Q_{L}}{Q_{H}};$$</p></div>
<small><b>Ecuación 4.</b> Eficiencia de la máquina de Carnot. En el corolario del teorema de Carnot se demuestra que todas las máquinas térmicas reversibles y que operen entre dos focos tienen esta eficiencia.</small>
<h3>Sobre la tercera ley de la termodinámica:</h3>
<p>La tercera ley también cuenta con múltiples formulaciones, en general se dirá algo como lo siguiente:</p>
<blockquote>Es imposible alcanzar el cero absoluto de temperatura mediante un número finito de procesos físicos.</blockquote>
<p>Históricamente ha habido múltiples intentos de poner esta ley en función de la primera o la segunda, tratando de demostrar que son lógicamente equivalentes. Sin embargo, <a href='https://arxiv.org/html/2401.04069v2'>aunque se ha conseguido demostrar a partir de la segunda ley que al acercarse al cero absoluto las variaciones de entropía tienden a 0</a>, a día de hoy no es posible prescindir de este principio.</p>
