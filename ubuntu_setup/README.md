# Ubuntu 18.04.1 installation

## Document conventions

- Every command is terminated with pressing enter. I won't show enter as something to be pressed

## Setting Up

1. Download and install [virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. Download the disc images for [Ubuntu 18.04.1](https://www.ubuntu.com/download/desktop/thank-you?version=18.04.1&architecture=amd64)
3. After you have installed virtualbox (my recommendation is to install it into a folder named C:\utils\virtualbox for windows users), complete the following steps after starting up virtual box

![Step 1](images/1.png)
![Step 2](images/2.png)
![Step 3](images/3.png)
![Step 4](images/4.png)
![Step 5](images/5.png)
![Step 6](images/6.png)
![Step 7](images/7.png)
![Step 8](images/8.png)
![Step 9](images/9.png)
![Step 10](images/10.png)
![Step 11](images/11.png)
![Step 12](images/12.png)
![Step 13](images/13.png)
![Step 14](images/14.png)
![Step 15](images/15.png)
![Step 16](images/16.png)
![Step 17](images/17.png)
![Step 18](images/18.png)
![Step 19](images/19.png)
![Step 20](images/20.png)
![Step 21](images/21.png)
![Step 22](images/22.png)
![Step 23](images/23.png)
![Step 24](images/24.png)
![Step 25](images/25.png)
![Step 26](images/26.png)
![Step 27](images/27.png)
![Step 28](images/28.png)
![Step 29](images/29.png)
![Step 30](images/30.png)
![Step 31](images/31.png)
![Step 32](images/32.png)
![Step 33](images/33.png)
![Step 34](images/34.png)
![Step 35](images/35.png)
![Step 36](images/36.png)
![Step 37](images/37.png)
![Step 38](images/38.png)
![Step 39](images/39.png)

4. Log back into your ubuntu virtual machine and install the virtualbox guest additions. It should be on the VirtualBox menu -> Devices -> Insert Guest Additions CD Image. When you click on the correct menu item you should see the following:

![Step 40](images/40.png)

This will install a bunch of utilities into the Ubuntu instance that will help play better with your host operating system.

![Step 41](images/41.png)

5. Restart your virtual machine

![Step 42](images/42.png)
![Step 43](images/43.png)
![Step 44](images/44.png)

6. From this point on, it will be assumed that you know how to restart your virtual machine.
7. Log back into your virtual machine and open up a terminal prompt.
8. At the terminal prompt run the following commands

```bash
sudo usermod -aG sudo $USER
sudo usermod -aG vboxsf $USER
```

9. Restart your virtual machine
