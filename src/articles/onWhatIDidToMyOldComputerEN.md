On what I did with my old Computer (and how to stablish a client-server relationship):///January 30, 2025///<p>Recently and old computer running Windows 8 fell into my hands. As someone who practices programming I took advantage of this fact so I could learn something new. After installing Debian I wondered if I could turn it into something useful, like a server. In this guide I will explain several ways of connecting an old computer to something like a laptop in order to control it from there and how to create a little server that serves locally files.</p>

<p>The first thing that I wanted to do was to get a shell of that Debian in my computer. The easiest way to do this is through a SSH connection. In order to do that I executed <u>ip a</u> in the old computer and I searched for the ip in the <u>eth0</u> profile: </p>
<pre><code>>>> ip a
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet 10.255.255.254/32 brd 10.255.255.254 scope global lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:14:2d:dc:c7:f1 brd ff:ff:ff:ff:ff:ff
    inet <span style='text-decoration:underline;'>114.92.19.10</span>/18 brd 114.92.19.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 be95::265:5ddf:befc:c7f2/64 scope link
       valid_lft forever preferred_lft forever<br>  
>>> ip addr show eth0 | grep 'inet\b' | awk '{print $2}' | cut -d/ -f1
<span style='text-decoration:underline;'>114.92.19.10</span>
</code></pre>

<p>After finding it I proceeded to generate a SSH key. This key can be generated in a lot off different ways (involving different criptography protocols and key sizes) one of which is:</p>
<pre><code>>>>ssh-keygen -t rsa -b 4096
Enter file in which to save the key (/home/debianmaster/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
The key fingerprint is:
SHA256:Xo0t6caMB/8TSsigxfY28JIfqYjyqxRZrFrPncx5yiU klashxx@server
The key's randomart image is:
+---[RSA 2048]----+
|                 |
|  .              |
|   o .           |
|  +   *    =     |
| +.  + BSo= o    |
|...o.+o+XO...    |
|.. .o.E==+B. .   |
|o . ...=.o...    |
|.+o.  o     ..   |
+----[SHA256]-----+
</code></pre>

<p>Now, with all of this done, I connected via SSH to the old computer for which I executed:</p>
<pre><code>>>>
ssh username@ip          //username and ip the computer you are connecting to
username@ip password:    //now the root passwd
....
</code></pre>
<p>Now you should notice that the prompt has changed, instead of showcasing your local directory and user, it should show the one of the computer you connected to (so now you have full control of the other computer from your other device, you don't even need to keep it's monitor plugged). Now, in order to remove the need to write de password every time the connection is  established, we have to use the key that we have previously generated, this is done via the following command:</p>
<pre><code>>>> ssh-copy-id -i user@ip    //now you shouldn´t need to introduce the password anymore
</code></pre>