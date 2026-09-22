Sobre el tensor de tensiones:///A 22 de septiembre de 2026///

<p></p><p>En resistencia de materiales se habla de la matriz de tensiones como aquella matriz que, para un sistema de referencia dado, contiene en su diagonal principal las tensiones en los ejes dados y en el resto de posiciones las tensiones tangenciales o cortantes entre planos. </p>
$$\begin{equation}
\begin{pmatrix}
\sigma_x & \tau_{xy} & \tau_{xz}\\
\tau_{yx} & \sigma_y & \tau_{yz}\\
\tau_{zx} & \tau_{zy} & \sigma_{z}
\end{pmatrix}
\end{equation}$$
<small><b>Matriz 1.</b> Matriz de tensiones en su forma corriente, la letra griega sigma ($\sigma$) denota tensión normal, tau ($\tau$) denota cortante (tensión de cizalladura).</small>
<h2>Propiedades elementales</h2>
<p>Lo primero a notar es que esta matriz, por su propio origen físico, siempre será simétrica. Por este motivo $\tau_{xy} = \tau_{yx}$ y así sucesivamente. Para ver porqué esto es así, fijémonos en la siguiente imagen:</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwt8H61aYog5wI1q69k0fImQVzz91yKAm_wQv99dyIaze5rftpDM0ykII&s=10" alt="Paralelepípedo unitario." style="max-height:60vw; margin: 0 auto">

<p>Si $\tau_{xy}$ genera una fuerza en sentido de $Y$ positivo, para que se cumpla que la suma de fuerzas sea cero en el eje $Y$ (condición que viene dada porque el paralelepípedo está inmóvil dentro de un sólido) es necesario que en el lado opuesto del paralelepípedo actúe una fuerza de igual módulo pero de sentido contrario. Ahora, si nos fijamos en esas dos fuerzas, reincido, de sentido contrario entre sí, nos daremos cuenta de que estas generan un momento antihorario (visto desde $Z$ positivo). De esta manera, para compensar este par y que la suma de momentos sea cero respecto al punto central del paralelepípedo, es necesario que $\tau_{yx}$ se dirija hacia el eje $X$ positivo y que, como en el caso anterior, en la cara opuesta haya una fuerza de sentido contrario. Esta demostración se conoce como el teorema de reciprocidad de las tensiones tangenciales de Cauchy.</p>

<p>De que la matriz sea simétrica surge una propiedad algebraica muy interesante. Para comprenderla es necesario saber interpretar primero esta matriz. Cada uno de los valores de la diagonal principal se encarga de decir como "se estira" el paralelepípedo respecto a cada eje. Mientras tanto, los valores de cortante indican como este "se deforma" hacia las esquinas. Al ser una matriz real y simétrica, el teorema espectral garantiza que es diagonalizable ortogonalmente. Esto implica que siempre existen tres autovalores reales y una base de tres autovectores ortogonales asociados. En términos físicos, esto significa que, sin importar lo complejo que sea el estado de tensiones en un punto, siempre es posible encontrar un sistema de ejes rotado en el cual las tensiones cortantes se anulan ($\tau = 0$) y solo persisten tensiones puramente normales, denominadas tensiones principales.</p>

<p>Es sabido que, al concebir una matriz como una transformación lineal, sus autovectores representan aquellas direcciones en las cuales los vectores contenidos en ellas, al someterse a la transformación, no cambian de orientación: únicamente su módulo se escala por el autovalor asociado. Aplicado a la mecánica de medios continuos, el hecho de que el tensor de tensiones posea siempre una base de tres autovectores ortogonales implica que:</p>
<blockquote>Sean cuales sean los esfuerzos a los que se somete un punto de un sólido, siempre existirán en él tres direcciones ortogonales en las cuales la tensión resultante es puramente normal y, por lo tanto, la tensión de cortadura o tangencial es nula ($\tau = 0$).</blockquote>
<small>Definición 1. Quedan definidas las direcciones principales de una matriz de tensiones, que son aquellas direcciones normales a los planos cuya tensión es puramente normal.</small>

<h3>Deducciones a partir de la diagonalicibilidad dela matriz:</h3>
<p>Que una matriz de tensiones, que describe unas tensiones en un sólido desde un sistema de referencia arbitrario, se puedan sacar unas direcciones principales surge necesariamente que, desde cualquier otro sistema de referencia el resultado de las tensiones principales sea unívoco. Dicho de otra manera, todas las matrices de tensiones que describen un sólido deben tener el mismo polinomio característico.</p>

<p>Es sabido que para encontrar los autovalores se impone que aplicar la transformación a un vector dado sea lo mismo que escalarlo por una constante ($mV = \lambda V$). Al desarrollar esta expresión queda que los autovalores se pueden sacar de resolver $\det(M-\lambda I)=0$  y los vectores propios ($A_{1}$, $A_{2}$ y $A_{3}$) de resolver $(M-\lambda I)V =0$. En una matriz 3x3 esta expresión da lugar al polinomio característico y llega a lo siguiente:</p>

$$P(\sigma) = -\sigma^3 + I_1 \sigma^2 - I_2 \sigma + I_3 = 0$$
<small>Ecuación 1. El polinomio característico, cuyas raíces son los autovalores.</small>
<p>Los coeficientes $I_1$, $I_2$ e $I_3$ reciben el nombre de invariantes del tensor de tensiones porque sus valores permanecen constantes ante cualquier rotación del sistema de ejes cartesianos. Sus expresiones en función de las componentes cartesianas arbitrarias y en función de las tensiones principales son las siguientes:</p>
<p>$$I_1 = tr(\sigma) = \sigma_x + \sigma_y + \sigma_z$$</p>

<p>$$I_2 = \begin{vmatrix} \sigma_x & \tau_{xy} \\ \tau_{yx} & \sigma_y \end{vmatrix} + \begin{vmatrix} \sigma_y & \tau_{yz} \\ \tau_{zy} & \sigma_z \end{vmatrix} + \begin{vmatrix} \sigma_x & \tau_{xz} \\ \tau_{zx} & \sigma_z \end{vmatrix}$$</p>

<p>$$I_3 = \det(\sigma) = \begin{vmatrix} \sigma_x & \tau_{xy} & \tau_{xz} \\ \tau_{yx} & \sigma_y & \tau_{yz} \\ \tau_{zx} & \tau_{zy} & \sigma_z \end{vmatrix}$$</p>



