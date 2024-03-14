##inserta valores iniciales en tablas catalogo y valores prueba para generar primeras api

##catalogos: user_roles, trade_mark, mesurament_unit, presentation, payment_method

insert into user_roles (role_name, role_description) 
values('Administrador', 'Rol de usuario administrador'), 
('Vendedor', 'Rol de usuario vendedor');

insert  into trade_mark (trade_mark_name, trade_mark_description)
values('Mantequilla Gloria', 'Marca de mantequilla'),
('Great Value', 'Marca de productos varios propiedad de Walmart'),
('Selecta', 'Marca de Harina '),
('Tres Estrelals', 'Marca de productos varios');

insert into mesurament_unit(mesurament_unit_name, unit_abbreviation)
values('Kilogramo','Kg'),
('Gramo','Gr'),
('Litro', 'L'),
('mililitro','mL'),

insert into presentation(presentation_name,presentation_description)
('Costal','Presentacion en costal.'),
('Bolsa','Presentacion en bolsa.'),
('Caja 4','Caja con 4 piezas'),
('Individual','Una pieza envuelta en papel celofan.'),
('Caja','Presentacion en caja.');

insert into payment_method(method_name, description)
values('Efectivo', 'Pago en efectivo'),
('Credito', 'Pago con tarjeta de credito'),
('Debito', 'Pago con tarjeta de debito'),
('Transferencia','Pago con transferencia'),



