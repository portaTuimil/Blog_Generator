Sobre el tensor de tensiones:///A 22 de septiembre de 2026///

<p>En resistencia de materiales se habla de la matriz o tensor de tensiones como aquella matriz que, para un sistema de referencia dado, contiene en su diagonal principal las tensiones en los ejes de dicho sistema y en el resto de posiciones las tensiones tangenciales o cortantes contenidas en los planos ortogonales a ellos. </p>
$$[T]_{xyz}=\begin{equation}
\begin{pmatrix}
\sigma_x & \tau_{xy} & \tau_{xz}\\
\tau_{yx} & \sigma_y & \tau_{yz}\\
\tau_{zx} & \tau_{zy} & \sigma_{z}
\end{pmatrix}
\end{equation}$$
<small><b>Matriz 1.</b> Matriz de tensiones en su forma corriente, la letra griega sigma ($\sigma$) denota tensión normal, tau ($\tau$) denota cortante (tensión de cizalladura).</small>
<p>A nivel intuitivo, el tensor de tensiones describe las fuerzas internas por unidad de superficie que originan la deformación en un punto del sólido. Mientras que las tensiones normales ($\sigma$) están asociadas a los cambios de longitud (estiramiento o compresión), las tensiones tangenciales ($\tau$) provocan la distorsión angular o cizallamiento, tendiendo a convertir las caras rectangulares de un elemento infinitesimal en rombos. </p>
<h2>Propiedades elementales</h2>
<p>Lo primero a notar es que esta matriz, por su propio origen físico, siempre será simétrica. Por este motivo $\tau_{xy} = \tau_{yx}$,  $\tau_{xz} = \tau_{zx}$ y así sucesivamente. Para ver porqué esto es así, fijémonos en la siguiente imagen:</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwt8H61aYog5wI1q69k0fImQVzz91yKAm_wQv99dyIaze5rftpDM0ykII&s=10" alt="Paralelepípedo unitario." style="max-height:60vw; margin: 0 auto">
<small><b>Imagen 1.</b> Paralelepípedo unitario.</small>
<p>Si $\tau_{xy}$ genera una fuerza en sentido de $Y$ positivo, para que se cumpla que la suma de fuerzas sea cero en el eje $Y$ (condición que viene dada porque el paralelepípedo representa un punto inmóvil dentro de un sólido) es necesario que en el lado opuesto del paralelepípedo actúe una fuerza de igual módulo pero de sentido contrario. Ahora, si nos fijamos en esas dos, nos daremos cuenta de que estas generan un momento antihorario (visto desde $Z$ positivo). De esta manera, para compensar este par y que la suma de momentos sea cero respecto al punto central del paralelepípedo, es necesario que $\tau_{yx}$ se dirija hacia el eje $X$ positivo y que, como en el caso anterior, en la cara opuesta haya una fuerza de sentido contrario. Esta demostración se conoce como el teorema de reciprocidad de las tensiones tangenciales de Cauchy y, al demostrar la simetría de esta matriz en todos los casos, abre la puerta a la aplicación del teorema espectral.</p>
<p>Al ser una matriz real y simétrica, el teorema espectral garantiza que es diagonalizable ortogonalmente. Esto asegura la existencia de tres autovalores reales y de una base formada por tres autovectores mutuamente ortogonales. En términos físicos, esto significa que, sin importar lo complejo que sea el estado de tensiones en un punto, siempre es posible encontrar un sistema de ejes rotado en el cual las tensiones cortantes se anulan ($\tau = 0$) y solo persisten tensiones puramente normales, denominadas tensiones principales.</p>
$$[T]_{123} = \begin{pmatrix} \sigma_1 & 0 & 0 \\ 0 & \sigma_2 & 0 \\ 0 & 0 & \sigma_3 \end{pmatrix}$$
<small><b>Matriz 2.</b>Matriz de deformaciones expresada desde su sistema de referencia principal. Sus ejes convencionalmente se denotan $1$, $2$ y $3$ (en oposición a $XYZ$) y se toman en orden de magnitud (${\sigma}_{1}>={\sigma}_{2}>={\sigma}_{3}$)</small>
<p>Es sabido que, al concebir una matriz como una transformación lineal, sus autovectores representan aquellas direcciones en las cuales los vectores contenidos en ellas, al someterse a la transformación, no cambian de orientación: únicamente su módulo se escala por el autovalor asociado. Aplicado a la mecánica de medios continuos, el hecho de que el tensor de tensiones posea siempre una base de tres autovectores ortogonales implica que:</p>
<blockquote>Sean cuales sean los esfuerzos a los que se somete un punto de un sólido, siempre existirán en él tres direcciones ortogonales en las cuales la tensión resultante es puramente normal y, por lo tanto, la tensión de cortadura o tangencial es nula ($\tau = 0$).</blockquote>
<small><b>Definición 1. </b> Quedan definidas las direcciones principales de una matriz de tensiones, que son aquellas direcciones normales a los planos cuya tensión es puramente normal.</small>

<h3>Deducciones a partir de la diagonalicibilidad dela matriz:</h3>
<p>Es sabido que para encontrar los autovalores se impone que aplicar la transformación a un vector dado sea lo mismo que escalarlo por una constante ($mV = \lambda V$). Al desarrollar esta expresión queda que los autovalores se pueden sacar de resolver $\det(M-\lambda I)=0$  y los vectores propios ($A_{1}$, $A_{2}$ y $A_{3}$) de resolver $(M-\lambda I)V =0$. En una matriz 3x3 esta expresión da lugar al polinomio característico y llega a lo siguiente:</p>

$$P(\sigma) = -\sigma^3 + I_1 \sigma^2 - I_2 \sigma + I_3 = 0$$
<small><b>Ecuación 1.</b> El polinomio característico, cuyas raíces son los autovalores.</small>
<p>Que de una matriz de tensiones, que describe unas tensiones en un sólido desde un sistema de referencia arbitrario, se puedan sacar unas direcciones principales surge necesariamente que, desde cualquier otro sistema de referencia el resultado de las tensiones principales sea unívoco. Dicho de otra manera, todas las matrices de tensiones que describen un sólido deben tener el mismo polinomio característico.</p>
<p>Los coeficientes $I_1$, $I_2$ e $I_3$ reciben el nombre de invariantes del tensor de tensiones porque sus valores permanecen constantes ante cualquier rotación del sistema de ejes cartesianos. Sus expresiones en función de las componentes cartesianas arbitrarias y en función de las tensiones principales son las siguientes:</p>
<p>$$I_1 = tr(\sigma) = \sigma_x + \sigma_y + \sigma_z$$</p>

<p>$$I_2 = \begin{vmatrix} \sigma_x & \tau_{xy} \\ \tau_{yx} & \sigma_y \end{vmatrix} + \begin{vmatrix} \sigma_y & \tau_{yz} \\ \tau_{zy} & \sigma_z \end{vmatrix} + \begin{vmatrix} \sigma_x & \tau_{xz} \\ \tau_{zx} & \sigma_z \end{vmatrix}$$</p>

<p>$$I_3 = \det(\sigma) = \begin{vmatrix} \sigma_x & \tau_{xy} & \tau_{xz} \\ \tau_{yx} & \sigma_y & \tau_{yz} \\ \tau_{zx} & \tau_{zy} & \sigma_z \end{vmatrix}$$</p>


