#include "stdafx.h"
#include <conio.h>
#include <iostream>
#include <stdlib.h>
#include <ctype.h>
#include <vector>

using namespace std;

void cls() {
	system("cls");
}

int menu() {
	cls();
	char input;
	cout << char(168) << "Qu" << char(130) << " pas" << char(162) << " papaaauuuu? " << char(168) << "C" << char(162) << "mo est" << char(160) << "s weeeeyyyyy?" << endl << "1.- T" << char(161) << "tulo" << endl << "2.- Descripci" << char(162) << "n" << endl << "3.- Ingredientes" << endl << "4.- Receta" << endl << char(168) << "Qu" << char(130) << " quieres hacer paps? ";
	cin >> input;
	if (cin.fail()) {
		cout << "Ingresa un número nada m" << char(160) << "s" << endl;
		return menu();
	}
	cin.ignore(256, '\n');
	if (input == '\\')//tab
		return -1;
	cout << input - '1';
	if ('1' <= input && input <= '4')
		return int(input - '0');
	else {
		cout << "Ingresa un número en rango de 1 a 4";
		cin.get();
		return menu();
	}
}

string askInput(char question[], char input[], int max, string str, char err[]) {
	cin.clear();
	cin.getline(input, max, '\n');
	if (cin.fail()) {
		cout << err << endl;
		cin.ignore(256, '\n');
		return askInput(question, input, max, str, err);
	}
	if (input[0] == '\\') {
		cout << str.substr(0, str.size() - 1).c_str() << ");" << endl;
		cin.get();
		return str.substr(0, str.size() - 1) + ");";
	}
	str += "(\"";
	str += input;
	str += "\"),";
	cout << endl << endl << str.c_str() << endl << endl << "Ingrese " << question;
	return askInput(question, input, max, str, err);
}

string title(string titles) {
	char input[50];
	cin.getline(input, 50, '\n');
	if (cin.fail()) {
		cout << "Ooops!! Algo sali" << char(162) << " mal, recuerda que el t" << char(161) << "tulo debe estar entre 1 y 50 caracteres" << endl;
		return title(titles);
	}
	if (input[0] == '\\') {
		cout << titles.substr(0, titles.size() - 1).c_str() << ");" << endl;
		cin.get();
		return titles.substr(0, titles.size() - 1) + ");";
	}
	titles += "(\"";
	titles += input;
	titles += "\"),";
	cout << endl << endl << titles.c_str() << endl;
	cout << "Ingrese el t\241tulo: ";
	return title(titles);
}

string description(string descriptions) {
	char input[300];
	cin.getline(input, 300, '\n');
	if (cin.fail()) {
		cout << "Ooops!! Algo sali" << char(162) << " mal, recuerda que la descripci" << char(162) << "n debe tener como m" << char(160) << "ximo 300 caracteres" << endl;
		return description(descriptions);
	}
	if (input[0] == '\\')
		return descriptions.substr(0, descriptions.size() - 1) + ");";
	descriptions += "(\"";
	descriptions += input;
	descriptions += "\"),";
	cout << endl << endl << descriptions.c_str() << endl;
	cout << "Ingrese la descripci" << char(162) << "n: ";
	return description(descriptions);
}

string ingredients(string ingredientes) {
	char input[75];
	cin.getline(input, 75, '\n');
	if (cin.fail()) {
		cout << "Ooops!! Algo sali" << char(162) << " mal, recuerda que el ingrediente debe tener como m" << char(160) << "ximo 75 caracteres" << endl;
		return ingredients(ingredientes);
	}
	if (input[0] == '\\')//tab
		return ingredientes.substr(0, ingredientes.size() - 1) + ");";
	char input2[2];
	cout << "Ingrese la llave for" << char(160) << "nea del usuario (enter para NULL): ";
	cin.getline(input2, 2, '\n');
	if (cin.fail()) {
		cout << "Ooops!! Algo sali" << char(162) << " mal, recuerda que el usuario es clave for" << char(160) << "nea (m" << char(160) << "ximo 2 caracteres)" << endl;
		return ingredients(ingredientes);
	}		
	ingredientes += "(\"";
	ingredientes += input;
	ingredientes += "\"),";
	cout << endl << endl << ingredientes.c_str() << endl;
	return ingredients(ingredientes);
}

string recipe(string recipes) {
	char input[1000];
	cin.getline(input, 1000, '\n');
	if (cin.fail()) {
		cout << "Ooops!! Algo sali" << char(162) << " mal!" << endl;
		return recipe(recipes);
	}
	if (input[0] == '\\')
		return recipes.substr(0, recipes.size() - 1)+");";
	recipes += "(\"";
	recipes += input;
	recipes += "\"),";
	cout << endl << endl << recipes.c_str() << endl;
	cout << "Ingrese la receta: ";
	return recipe(recipes);
}

int summary(string sqls[4]) {
	if (sqls[0].compare("INSERT INTO title(tit_tit) VALUES(") != 0)
		cout << "     /* T" << char(214) << "TULOS */     " << endl << endl << sqls[0].c_str() << endl << endl;
	if (sqls[1].compare("INSERT INTO description(des_des) VALUES(") != 0)
		cout << "     /* DESCRIPCIONES */     " << endl << endl << sqls[1].c_str() << endl << endl;
	if (sqls[2].compare("INSERT INTO ingredients(ing_ing, usr_ing) VALUES(") != 0)
		cout << "     /* INGREDIENTES */     " << endl << endl << sqls[2].c_str() << endl << endl;
	if (sqls[3].compare("INSERT INTO recipeprocess(rec_rps) VALUES(") != 0)
		cout << "     /* RECETAS */     " << endl << endl << sqls[3].c_str();
	cin.get();
	return 0;
}

int pseudoMain(string sqls[4]) {
	const int selected = menu();
	cls();
	if (selected == -1)
		return summary(sqls);
	if (selected == 1) {
		cout << "Ingrese el t" << char(161) << "tulo: ";
		char input[50];
		sqls[0] = title(sqls[0]);//askInput("el título: ", input, 50, sqls[0], "Ooops!! Algo sali\xC3\xB3 mal, recuerda que el t\xC3\xADtulo debe estar entre 1 y 50 caracteres");
	}
	else if (selected == 2) {
		cout << "Ingrese la descripci" << char(162) << "n: ";
		sqls[1] = description(sqls[1]);
	}
	else if (selected == 3) {
		cout << "Ingrese los ingredientes: ";
		sqls[2] = ingredients(sqls[2]);
	}
	else {
		cout << "Ingrese la receta: ";
		sqls[3] = recipe(sqls[3]);
	}
	return pseudoMain(sqls);
}

int main() {
	string sqls[4];
	sqls[0] = "INSERT INTO title(tit_tit) VALUES(";
	sqls[1] = "INSERT INTO description(des_des) VALUES(";
	sqls[2] = "INSERT INTO ingredients(ing_ing, usr_ing) VALUES(";
	sqls[3] = "INSERT INTO recipeprocess(rec_rps) VALUES(";
	return pseudoMain(sqls);
}
