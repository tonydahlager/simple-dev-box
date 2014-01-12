simple-dev-box
==============

simple dev book for NodeJS development

To get started: 

    vagrant up
    
To provision the VM after making changes: 

    vagrant provision
    
To run ansible or ansible-playbook against:
  
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
