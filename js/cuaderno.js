function AlumnosController($scope)
{
	$scope.alumnos =  [
		{
			nombre:'Juan Blanco',
			telefono: '9421800564',
			curso:'Ultimo ESO'
		},
		{
			nombre:'Roxana Luxwmburgo',
			telefono: '7987987897897', 
			curso:'Segundo ESO'
		},
		{
			nombre:'Alberto Herrera', 
			telefono: '1234567891', 
			curso:'Primero ESO'
		},
		{
			nombre:'Ana Mariño', 
			telefono: '7894563210', 
			curso:'Tercero ESO'
		}
	];

	$scope.Save = function()
	{
		$scope.alumnos.push({
		nombre: $scope.nuevoAlumno.nombre,
		telefono: $scope.nuevoAlumno.nombre,
		curso: $scope.nuevoAlumno.curso 
		});

		$scope.formVisibility= false;
	}

	$scope.ShowForm = function(){
		$scope.formVisibility= true;
		console.log($scope.formVisibility)
	}

}
