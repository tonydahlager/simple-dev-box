simple-dev-box
==============
simple dev book for NodeJS development


### Install

- Every operating system
	- VirtualBox, [download here](https://www.virtualbox.org/wiki/Downloads)
	- Vagrant, [download here](http://www.vagrantup.com/downloads.html)

- __Linux Ubuntu__
	- git

		```
		sudo apt-get install git
		```
	    
	- ansible

		```
	    sudo add-apt-repository ppa:rquillo/ansible
    	sudo apt-get update
	    sudo apt-get install ansible
    	```
- __Mac OSX__ (using Homebrew, [install instructions here](http://brew.sh/))
	- git
	
		```
		brew install git
		```
	
	- ansible 
	
		```
		brew install ansible
		```
	
### Getting started

Clone the reop:

    git clone http://github.com/westonplatter/simple-dev-box.git
    
    cd simple-dev-box
    
    vagrant up
        
Now you can SSH into the Vagrant machine, IE, the SimpleDevBox:

	vagrant ssh

Check that `git` and `nodejs` were installed (both should return version installed):

	git -v
	
	node -v
	

    
### Extra stuff
  
To run the ansible-playbook again:
  
    ansible-playbook \
      -i vagrant_ansible_inventory_default \
      --private-key=~/.vagrant.d/insecure_private_key \
      -u vagrant \
      nodejs-single-node.yml



License
-------
Copyright (c) 2014 Weston Platter, BSD-3.


Author
------
Weston Platter
