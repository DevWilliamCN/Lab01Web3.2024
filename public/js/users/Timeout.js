    // let timeoutId;
    // const umbralMovimientoMouse = 5;
    // let ultimoMovimiento = 0;
    // const tiempoInactividad = 180000; 

    // function iniciarMonitoreoInactividad() {
    // document.addEventListener('mousemove', manejarMovimientoMouse);
    // document.addEventListener('keydown', reiniciarTemporizadorInactividad);
    // reiniciarTemporizadorInactividad();
    // }

    // function reiniciarTemporizadorInactividad() {
    // if (Date.now() - ultimoMovimiento > 1000) { 
    //     clearTimeout(timeoutId);
    //     timeoutId = setTimeout(cerrarSesion, tiempoInactividad);
    // }
    // }

    // function manejarMovimientoMouse(evento) {
    // if (Math.abs(evento.movementX) > umbralMovimientoMouse || Math.abs(evento.movementY) > umbralMovimientoMouse) {
    //     ultimoMovimiento = Date.now();
    //     reiniciarTemporizadorInactividad();
    // }
    // }

    // function cerrarSesion() {
    // firebase.auth().signOut().then(function() {
    //     alert('Sesión cerrada debido a inactividad');
    //     window.location.href = 'login.html'; 
    // }).catch(function(error) {
    //     console.error('Error al cerrar sesión:', error);
    // });
    // }

    // iniciarMonitoreoInactividad();

    // window.addEventListener('beforeunload', function(event) {
    // cerrarSesion(); 
    // });
